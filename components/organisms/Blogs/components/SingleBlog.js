import PropTypes from 'prop-types';
import { Typography } from '@/components/molecules';

const SingleProject = (props) => {
  const { item } = props;
  return (
    <div className="[ shadow-primary relative ]">
      <img className="[ w-full ]" src={item.image} alt={item.title} />
      <div className="[ px-3-0 pt-3-8 pb-3-2 ]">
        <div className="[ text-center ]">
          <Typography variant="h3">{item.title}</Typography>
          <Typography lineClamp={3} className="[ text-secondary-text mt-2-7 ]">
            {item.description}
          </Typography>
        </div>
        <div className="[ flex items-center justify-between text-1-6 font-p-md-it mt-2-0 ]">
          <div className="[ text-primary-hover ]">29/08/2020</div>
          <div className="[ text-primary-hover border-b border-solid hover:text-primary duration-200 cursor-pointer ]">
            Read More...
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  item: PropTypes.object.isRequired
};

export default SingleProject;
