import PropTypes from 'prop-types';
import clsx from 'clsx';

const IconCircle = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={clsx(className, 'flex items-center justify-center border-solid border rounded-full')}
      {...rest}
    >
      {children}
    </div>
  );
};

IconCircle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

IconCircle.defaultProps = {
  children: null,
  className: ''
};

export default IconCircle;
