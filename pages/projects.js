import { PageHeader } from '@/components/atoms';
import { projects } from '@/DUMMY_DATA';
import { SingleProject } from '@/components/molecules';

const Projects = () => {
  return (
    <section>
      <PageHeader title="Projects" />
      {projects && (
        <div className="container [ grid grid-cols-3 gap-5-0 py-12-5 ]">
          {projects && projects.map((x) => <SingleProject item={x} key={x.id} />)}
        </div>
      )}
    </section>
  );
};

export default Projects;
