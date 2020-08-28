import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';
import { uploadImage } from '../../redux/actions/imageActions';

const apiKey = '2xmvsr71p1sbv3i9ut4ya36qcvc90s9zzv7k0zgcwnu6mzv1';
const plugins = ['advlist autolink lists link image media', 'table paste code wordcount'];
const toolbar = `code | undo redo | formatselect | bold italic backcolor blockquote | bullist numlist | image | media | link | myCustomToolbarButton`;

function TinyMCE(props) {
  const dispatch = useDispatch();

  function imagesUploadHandler(blobInfo, success) {
    const formData = new FormData();
    formData.append('image', blobInfo.blob());
    dispatch(
      uploadImage({
        file: formData,
        getResponse: (response) => {
          success(process.env.staticUrl + response.data.filename);
        }
      })
    );
  }
  const TinyInit = {
    height: 500,
    menubar: true,
    plugins,
    toolbar,
    branding: false,
    images_upload_handler: imagesUploadHandler,
    image_dimensions: false,
    image_description: false,
    media_dimensions: false,
    media_alt_source: false,
    media_poster: false,
    media_url_resolver: (data, resolve, reject) => {
      const splittedUrl = data.url.split('watch?v=');
      console.log(splittedUrl);
      if (splittedUrl.length > 1) {
        const embedHtml = `<figure class="media"><iframe src="https://www.youtube.com/embed/${splittedUrl.pop()}"></iframe></figure>`;
        resolve({ html: embedHtml });
      } else {
        reject({ msg: 'WRONG URL' });
      }
    },
    setup: (editor) => {
      editor.ui.registry.addButton('myCustomToolbarButton', {
        text: 'My Custom Button',
        onAction: () => console.log('Button clicked!')
      });
    }
  };

  function onChange(e) {
    props.handleInput({ name: props.name, value: e.target.getContent() });
  }

  return (
    <div className="[ grid grid-cols-12 ]">
      <label className="[ col-span-2 text-right mr-3-0 ]">{props.label}</label>
      <div className="[ col-span-7 ]">
        <NoSSR>
          <Editor apiKey={apiKey} initialValue={props.initialValue} init={TinyInit} onChange={onChange} />
        </NoSSR>
      </div>
    </div>
  );
}
export default TinyMCE;
