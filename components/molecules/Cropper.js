import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CropperJS from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Button from '@material-ui/core/Button';
import { uploadImage } from '../../redux/actions/imageActions';

const cropper = React.createRef(null);

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

function Cropper(props) {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const [data, setData] = useState(null);

  async function onCrop() {
    cropper.current.getCroppedCanvas().toBlob(
      (blob) => {
        const time = new Date().getTime();
        const splitedName = src.name.split('.');
        const name = splitedName.length > 1 ? `${splitedName[0] + time}.${splitedName.pop()}` : `${time}.jpg`;
        const formData = new FormData();
        formData.append('image', new File([blob], name));
        dispatch(
          uploadImage({
            file: formData,
            getResponse: (response) => {
              setData(response.data.filename);
              setSrc(null);
              props.getFilename(response.data.filename);
            }
          })
        );
      },
      'image/jpeg',
      0.99
    );
  }
  async function getImageSrc(event) {
    const temp = event.target.files[0];
    const base64 = await toBase64(temp);
    setSrc({ image: base64, name: temp.name });
    setData(null);
  }

  return (
    <>
      <div className="[ grid grid-cols-12 ]">
        <label className="[ col-span-2 text-right self-center mr-3-0 ]">{props.label}</label>
        <div className="[ col-span-7 ]">
          <input
            type="file"
            onChange={getImageSrc}
            name={src}
            onClick={(e) => {
              e.target.value = '';
            }}
          />
        </div>
      </div>
      {src && (
        <div className="[ w-50-percent mx-auto ]">
          <CropperJS
            ref={cropper}
            src={src.image}
            style={{ height: 300, width: '100%' }}
            aspectRatio={props.width / props.height}
            scalable
            zoomable={false}
            viewMode={2}
            ready={() => {
              const contData = cropper.current.getContainerData();
              cropper.current.setCropBoxData({
                height: contData.height,
                width: contData.width
              });
            }}
          />
          <Button variant="contained" color="secondary" onClick={onCrop} edge="end" aria-label="crop">
            Crop
          </Button>
        </div>
      )}
      {data && <img className="[ mt-2-0 w-30-percent mx-auto ]" src={process.env.staticUrl + data} alt="" />}
    </>
  );
}

export default Cropper;
