import { MainContainer, Article, Gallery, PinnedBlogs, PinnedProjects } from '@/components/organisms';
import { aboutUs, blogs, projects, sliderItems } from '@/DUMMY_DATA';

const Index = () => {
  return (
    <section>
      <MainContainer />
      {aboutUs && <Article className="[ mt-12-5 ]" article={aboutUs} />}
      {blogs && <PinnedBlogs className="[ mt-12-5 ]" blogs={blogs.slice(0, 3)} />}
      {projects && <PinnedProjects className="[ mt-12-5 ]" projects={projects} />}
      {sliderItems && <Gallery className="[ mt-12-5 ]" items={sliderItems} />}
    </section>
  );
};

export default Index;
