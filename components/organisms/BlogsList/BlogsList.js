import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SingleBlog } from './components';

const BlogsList = (props) => {
  const { className, blogs } = props;
  return (
    <div className={clsx(className, 'container [ grid grid-cols-3 gap-5-0 py-12-5 ]')}>
      {blogs && blogs.map((x) => <SingleBlog item={x} key={x.id} />)}
    </div>
  );
};

BlogsList.propTypes = {
  className: PropTypes.string,
  blogs: PropTypes.instanceOf(Array).isRequired
};

BlogsList.defaultProps = {
  className: ''
};

export default BlogsList;
