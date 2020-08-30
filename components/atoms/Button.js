/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = (props) => {
  const { className, children, type, ...rest } = props;
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        className,
        'btn [ h-5-0 flex items-center justify-center bg-primary px-3-0 text-1-6 relative hover:bg-primary-hover duration-200 text-white ]'
      )}
    >
      {children}
      <style jsx>{`
        .btn {
          min-width: 16rem;
          &:after {
            content: '';
            @apply absolute h-0-3 bg-primary-hover bottom-0;
            width: calc(100% - 6rem);
          }
        }
      `}</style>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  className: '',
  type: 'button'
};

export default Button;
