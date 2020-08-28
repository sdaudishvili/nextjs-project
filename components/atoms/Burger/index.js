import './style.scss';
import PropTypes from 'prop-types';

const Burger = (props) => {
  const { onClick, isOpened } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`[ relative w-3-2 h-1-8 pointer-events-auto cursor-pointer ] burger-menu-icon ${
        isOpened ? 'burger-menu-icon--is-opened' : ''
      }`}
    >
      <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
      <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
      <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
      <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
    </button>
  );
};

Burger.propTypes = {
  onClick: PropTypes.func,
  isOpened: PropTypes.bool
};

Burger.defaultProps = {
  onClick: () => {},
  isOpened: false
};

export default Burger;
