import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SocialIcons } from '@/components/molecules';
import { Share } from '@/components/atoms';

const PinnedBlogs = (props) => {
  const { blogs, className } = props;
  const blog = blogs[0];
  return (
    <div className={clsx(className, '[ flex ]')}>
      <div className="[ w-50-percent ]">
        <img className="[ w-full ]" src={blog.image} alt={blog.title} />
      </div>
      <div className="[ w-50-percent bg-pinned-blogs text-white px-10-0 pt-15-0 pb-13-2 flex flex-col justify-between ]">
        <div>
          <h4 className="[ font-m-sbd text-1-2 text-secondary-text tracking-widest ]">BLOG</h4>
          <h3 className="[ font-p-bd text-4-8 mt-1-0 leading-1-2 w-80-percent ]">{blog.title}</h3>
          <p className="description [ font-m-md text-1-4 mt-3-7 text-secondary-text ]">{blog.description}</p>
        </div>
        <div className="[ flex items-center justify-between text-1-6 font-p-md-ittext-1-6 font-p-md-it ]">
          <div className="[ text-primary-hover ]">29/08/2020</div>
          <div className="[ flex items-center ]">
            <Share />
            <SocialIcons className="ml-3-0" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .description {
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
