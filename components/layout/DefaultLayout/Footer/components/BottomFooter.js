import PropTypes from 'prop-types';
import clsx from 'clsx';

const Subscribe = (props) => {
  const { className } = props;
  return (
    <div className={clsx(className, '[ grid grid-cols-12 gap-4-2 ]')}>
      <div className="bg-primary col-span-3 h-10-0" />
      <div className="bg-primary-hover col-span-5 h-10-0" />
      <div className="bg-secondary-text col-span-4 h-10-0" />
    </div>
  );
};

Subscribe.propTypes = {
  className: PropTypes.string
};

Subscribe.defaultProps = {
  className: ''
};

export default Subscribe;
