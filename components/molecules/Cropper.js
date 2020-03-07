import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CropperJS from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Button from '@material-ui/core/Button';
import { uploadImage, cropImage } from '../../redux/actions/imageActions';

const cropper = React.createRef(null);

function Cropper(props) {
  const dispatch = useDispatch();
  const [src, setSrc] = useState(null);
  const [data, setdata] = useState(null);

  async function onCrop() {
    const { x, y, width, height } = cropper.current.getData(true);
    const file = await dispatch(cropImage({ x, y, width, height, src }));
    setdata(file.data);
    setSrc(null);
    props.getImageUrl({ name: props.name, value: file.data });
  }
  async function getImageSrc(event) {
    const file = await dispatch(uploadImage(event.target.files[0]));
    setSrc(file.data.filename);
    setdata(null);
  }
  return (
    <>
      <div className="[ grid grid-cols-12 ]">
        <label className="[ col-span-3 text-right self-center mr-3-0 ]">{props.label}</label>
        <div className="[ col-span-9 ]">
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
            src={STATICURL + src}
            style={{ height: 300, width: '100%' }}
            aspectRatio={props.x / props.y}
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
      {data && <img className="[ mt-2-0 w-50-percent mx-auto ]" src={STATICURL + data} alt="" />}
    </>
  );
}

export default Cropper;
