import PropTypes from 'prop-types';

const ImageUploader = (props) => {
  const { label, handleInput, name, image } = props;
  return (
    <>
      <div className="[ grid grid-cols-12 ]">
        <div className="[ col-span-2 text-right self-center mr-3-0 ]">{label}</div>
        <div className="[ col-span-7 ]">
          <input type="file" onChange={handleInput} name={name} />
        </div>
      </div>
      {image && (
        <img className="[ mt-2-0 w-30-percent ml-30-percent ]" src={process.env.staticUrl + image} alt="" />
      )}
    </>
  );
};

ImageUploader.propTypes = {
  label: PropTypes.string,
  handleInput: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.node
};

ImageUploader.defaultProps = {
  label: '',
  handleInput: () => {},
  name: '',
  image: null
};

export default ImageUploader;
