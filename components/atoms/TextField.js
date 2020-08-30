import PropTypes from 'prop-types';
import clsx from 'clsx';

const TextField = (props) => {
  const { className, variant, type, multiline, ...rest } = props;
  const propsObject = {
    ...rest,
    type,
    className: clsx(
      {
        '[ border-2 border-border-secondary border-solid ]': variant === 'outlined',
        '[ border-b-2 border-primary-hover border-solid bg-primary-input-bg ]': variant === 'primary',
        '[ h-5-0 ]': !multiline
      },
      className,
      '[ font-m-rg px-2-8 italic placeholder-secondary-text py-1-0 ]'
    )
  };
  return multiline ? <textarea {...propsObject} /> : <input {...propsObject} />;
};

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'primary']),
  multiline: PropTypes.bool
};

TextField.defaultProps = {
  className: '',
  type: 'text',
  variant: 'primary',
  multiline: false
};

export default TextField;
