import PropTypes from 'prop-types';

function Input(props) {
  const { label, type, name, value, handleInput } = props;
  const onChange = (e) => {
    handleInput({ name: e.target.name, value: e.target.value });
  };
  return (
    <div className="[ grid grid-cols-12 ]">
      <div className="[ col-span-2 text-right self-center mr-3-0 ]">{label}</div>
      <div className="[ col-span-7 ]">
        <input type={type} onChange={onChange} name={name} value={value} />
      </div>
      <style jsx>{`
        input {
          width: 100%;
          border: 1px solid #ebedf2;
          padding: 0.5rem 1rem;
          transition: 0.15s;
        }

        input:focus {
          border-color: #716aca;
          transition: 0.15s;
        }
      `}</style>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  handleInput: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  label: '',
  handleInput: () => {},
  name: '',
  value: '',
  type: 'text'
};

export default Input;
