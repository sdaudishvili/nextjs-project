import PropTypes from 'prop-types';
import { Button } from '@/components/atoms';
import Typography from './Typography';

const SingleProject = (props) => {
  const { project } = props;
  return (
    <div className="[ shadow-primary relative ]">
      <img className="[ w-full ]" src={project.image} alt={project.title} />
      <div className="[ px-3-0 pt-5-8 pb-6-3 text-center ]">
        <Typography variant="h3">{project.title}</Typography>
        <Typography className="[ text-secondary-text mt-2-7 ]">{project.description}</Typography>
      </div>
      <div className="[ absolute bottom-0 m-auto left-50-percent transform -translate-x-50-percent translate-y-60-percent ]">
        <Button>Apply Now</Button>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default SingleProject;
