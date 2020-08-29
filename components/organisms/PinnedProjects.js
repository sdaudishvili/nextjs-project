import PropTypes from 'prop-types';
import { SingleProject, Typography } from '@/components/molecules';
import clsx from 'clsx';

const PinnedProjects = (props) => {
  const { className, projects } = props;
  return (
    <div className={clsx(className, 'container')}>
      <div className="[ text-center ]">
        <Typography variant="subtitle2" className="[ text-secondary-text ]">
          PROJECTS
        </Typography>
        <Typography variant="h2" className="[ mt-1-2 ]">
          Upcoming Projects
        </Typography>
      </div>
      <div className="[ grid grid-cols-3 gap-3-0 mt-8-0 ]">
        {projects.map((project) => (
          <SingleProject key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

PinnedProjects.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.instanceOf(Array).isRequired
};

PinnedProjects.defaultProps = {
  className: ''
};

export default PinnedProjects;
