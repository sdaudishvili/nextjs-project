import PropTypes from 'prop-types';

const Blogs = (props) => {
  const { className, blogs } = props;
  return <div className={className}>{JSON.stringify(blogs)}</div>;
};

Blogs.propTypes = {
  className: PropTypes.string,
  blogs: PropTypes.instanceOf(Array).isRequired
};

Blogs.defaultProps = {
  className: ''
};

export default Blogs;
