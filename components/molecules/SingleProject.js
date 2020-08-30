import PropTypes from 'prop-types';
import { Button } from '@/components/atoms';
import Typography from './Typography';

const SingleProject = (props) => {
  const { item } = props;
  return (
    <div className="[ shadow-primary relative ]">
      <img className="[ w-full ]" src={item.image} alt={item.title} />
      <div className="[ px-3-0 pt-5-8 pb-6-3 text-center ]">
        <Typography lineClamp={2} variant="h3">
          {item.title}
        </Typography>
        <Typography lineClamp={3} className="[ text-secondary-text mt-2-7 ]">
          {item.description}
        </Typography>
      </div>
      <div className="[ absolute bottom-0 m-auto left-50-percent transform -translate-x-50-percent translate-y-60-percent ]">
        <Button>Apply Now</Button>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  item: PropTypes.object.isRequired
};

export default SingleProject;
