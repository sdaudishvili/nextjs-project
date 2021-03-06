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
      <style jsx>{`
        .burger-menu-icon {
          $self: &;
          &__line {
            transform: rotate(0deg);
            width: 100%;

            &:nth-child(1) {
              top: 0px;
              transform: scaleX(1);
              transform-origin: right;
              transition: all 0.25s ease 0.25s;
            }

            &:nth-child(2),
            &:nth-child(3) {
              top: 50%;
              transform: translateY(-50%);
              transition: all 0.25s ease;
            }

            &:nth-child(4) {
              top: 100%;
              transform: scaleX(1) translateY(-100%);
              transform-origin: left;
              transition: all 0.25s ease 0.25s;
            }
          }
          &--is-opened {
            #{$self}__line {
              &:nth-child(1) {
                transition: all 0.25s ease;
                transform: scaleX(0);
                transform-origin: right;
              }

              &:nth-child(2) {
                transform: rotate(45deg);
                transition: all 0.25s ease 0.15s;
              }

              &:nth-child(3) {
                transform: rotate(135deg);
                transition: all 0.25s ease 0.15s;
              }
              &:nth-child(4) {
                transition: all 0.25s ease;
                transform: scaleX(0) translateY(-100%);
                transform-origin: left;
              }
            }
          }
        }
      `}</style>
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
