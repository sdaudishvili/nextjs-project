import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NoSSR } from '@/components/atoms';
import { uploadImage } from '@/redux/actions/imageActions';

const apiKey = '2xmvsr71p1sbv3i9ut4ya36qcvc90s9zzv7k0zgcwnu6mzv1';
const plugins = ['advlist autolink lists link image media', 'table paste code wordcount'];
const toolbar = `code | undo redo | formatselect | bold italic backcolor blockquote | bullist numlist | image | media | link | myCustomToolbarButton`;

function TinyMCE(props) {
  const { handleInput, name, label, initialValue } = props;
  const dispatch = useDispatch();

  const imagesUploadHandler = (blobInfo, success) => {
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
  };
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

  const onChange = (e) => {
    handleInput({ name, value: e.target.getContent() });
  };

  return (
    <div className="[ grid grid-cols-12 ]">
      <div className="[ col-span-2 text-right mr-3-0 ]">{label}</div>
      <div className="[ col-span-7 ]">
        <NoSSR>
          <Editor apiKey={apiKey} initialValue={initialValue} init={TinyInit} onChange={onChange} />
        </NoSSR>
      </div>
    </div>
  );
}

TinyMCE.propTypes = {
  handleInput: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.string
};

TinyMCE.defaultProps = {
  handleInput: () => {},
  name: '',
  label: '',
  initialValue: ''
};

export default TinyMCE;
