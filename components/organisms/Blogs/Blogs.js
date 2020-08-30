import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SingleBlog } from './components';

const Blogs = (props) => {
  const { className, blogs } = props;
  return (
    <div className={clsx(className, 'container [ grid grid-cols-3 gap-5-0 py-12-5 ]')}>
      {blogs && blogs.map((x) => <SingleBlog item={x} key={x.id} />)}
    </div>
  );
};

Blogs.propTypes = {
  className: PropTypes.string,
  blogs: PropTypes.instanceOf(Array).isRequired
};

Blogs.defaultProps = {
  className: ''
};

export default Blogs;
