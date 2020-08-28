import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button
      {...rest}
      type="button"
      className={clsx(
        className,
        'btn [ h-5-0 flex items-center justify-center bg-primary px-3-0 text-1-6 relative hover:bg-primary-hover duration-200 ]'
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
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  className: ''
};

export default Button;
