import Link from 'next/link';
import PropTypes from 'prop-types';

const RouterLink = (props) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

RouterLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

RouterLink.defaultProps = {
  className: '',
  children: null
};
export default RouterLink;
