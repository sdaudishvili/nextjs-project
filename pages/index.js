import { MainContainer, Article, Gallery, PinnedBlogs, PinnedProjects } from '@/components/organisms';
import { aboutUs, pinnedBlogs, projects, sliderItems } from '@/DUMMY_DATA';

const Index = () => {
  return (
    <section>
      <MainContainer />
      {aboutUs && <Article className="[ mt-12-5 ]" article={aboutUs} />}
      {pinnedBlogs && <PinnedBlogs className="[ mt-12-5 ]" blogs={pinnedBlogs} />}
      {projects && <PinnedProjects className="[ mt-12-5 ]" projects={projects} />}
      {sliderItems && <Gallery className="[ mt-12-5 ]" items={sliderItems} />}
    </section>
  );
};

export default Index;
