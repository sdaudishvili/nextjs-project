import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

const Switcher = (props) => {
  const { label, isChecked, handleChange, name } = props;
  return (
    <div className="[ grid grid-cols-12 ]">
      <div className="[ col-span-2 text-right self-center mr-3-0 ]">{label}</div>
      <div className="[ col-span-7 ]">
        <Switch
          checked={isChecked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          name={name}
        />
      </div>
    </div>
  );
};

Switcher.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func
};

Switcher.defaultProps = {
  label: '',
  name: '',
  isChecked: false,
  handleChange: () => {}
};

export default Switcher;
