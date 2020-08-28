import { Button, ButtonGroup } from '@material-ui/core';
import PropTypes from 'prop-types';

const TwoButtons = (props) => {
  const { onSubmit, onCancel } = props;
  return (
    <ButtonGroup aria-label="text primary button group">
      <Button fontSize={16} className="[ text-2-0 ]" variant="contained" color="primary" onClick={onSubmit}>
        <span className="[ text-1-3 ]">Save</span>
      </Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>
        <span className="[ text-1-3 ]">Cancel</span>
      </Button>
    </ButtonGroup>
  );
};

TwoButtons.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

TwoButtons.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {}
};

export default TwoButtons;
