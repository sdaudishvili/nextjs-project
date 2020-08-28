import PropTypes from 'prop-types';

const TextBox = (props) => {
  const { label, type, handleInput, name, value } = props;
  return (
    <div className="[ grid grid-cols-12 ]">
      <div className="[ col-span-2 text-right self-center mr-3-0 ]">{label}</div>
      <div className="[ col-span-7 ]">
        <textarea type={type} onChange={handleInput} name={name} value={value} />
      </div>
    </div>
  );
};

TextBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  handleInput: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
};

TextBox.defaultProps = {
  label: '',
  name: '',
  handleInput: () => {},
  type: 'text',
  value: ''
};

export default TextBox;
