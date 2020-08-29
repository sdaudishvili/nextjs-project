import clsx from 'clsx';
import PropTypes from 'prop-types';
import RouterLink from './RouterLink';

const ReadMore = (props) => {
  const { path, className } = props;

  return (
    <RouterLink
      className={clsx(className, '[ font-m-md text-1-6 text-primary hover:underline block ]')}
      href={path}
    >
      Read More
    </RouterLink>
  );
};
ReadMore.propTypes = {
  path: PropTypes.string,
  className: PropTypes.string
};
ReadMore.defaultProps = {
  path: '/',
  className: ''
};

export default ReadMore;
