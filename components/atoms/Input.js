import PropTypes from 'prop-types';
import clsx from 'clsx';

const Input = (props) => {
  const { className, variant, type, ...rest } = props;
  return (
    <input
      {...rest}
      type={type}
      className={clsx(
        { '[ border-2 border-border-secondary border-solid ]': variant === 'outlined' },
        className,
        '[ font-m-rg pl-2-8 italic placeholder-black ]'
      )}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'primary'])
};

Input.defaultProps = {
  className: '',
  type: 'text',
  variant: 'primary'
};

export default Input;
