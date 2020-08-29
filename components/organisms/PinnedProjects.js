import PropTypes from 'prop-types';
import { SingleProject } from '@/components/molecules';
import clsx from 'clsx';

const PinnedProjects = (props) => {
  const { className, projects } = props;
  return (
    <div className={clsx(className, 'container')}>
      <div className="[ text-center ]">
        <h4 className="[ font-m-sbd text-1-2 text-secondary-text tracking-widest ]">PROJECTS</h4>
        <h3 className="[ font-p-bd text-4-8 mt-1-0 leading-1-2 ]">Upcoming Projects</h3>
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
