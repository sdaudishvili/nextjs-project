import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SocialIcons, Typography } from '@/components/molecules';
import { Share } from '@/components/atoms';

const PinnedBlogs = (props) => {
  const { blogs, className } = props;
  const blog = blogs[0];
  return (
    <div className={clsx(className, '[ flex ]')}>
      <div className="[ w-50-percent ]">
        <img className="[ w-full ]" src={blog.image} alt={blog.title} />
      </div>
      <div className="[ w-50-percent bg-pinned-blogs text-white px-10-0 pt-11-2 pb-10-0 flex flex-col justify-between ]">
        <div>
          <Typography variant="subtitle2" className="[ text-secondary-text ]">
            BLOG
          </Typography>
          <Typography variant="h2" className="[ mt-1-0 w-80-percent ]">
            {blog.title}
          </Typography>
          <Typography className="two-columns [ mt-3-7 text-secondary-text ]">{blog.description}</Typography>
        </div>
        <div className="[ flex items-center justify-between text-1-6 font-p-md-it ]">
          <div className="[ text-primary-hover ]">29/08/2020</div>
          <div className="[ flex items-center ]">
            <Share />
            <SocialIcons className="ml-3-0" />
          </div>
        </div>
      </div>
      <style jsx global>{`
        .two-columns {
          column-count: 2;
          column-gap: 7rem;
        }
      `}</style>
    </div>
  );
};

PinnedBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  className: PropTypes.string
};

PinnedBlogs.defaultProps = {
  className: PropTypes.string
};

export default PinnedBlogs;
