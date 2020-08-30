import { PageHeader } from '@/components/atoms';
import { PinnedBlogs, Blogs } from '@/components/organisms';
import { blogs } from '@/DUMMY_DATA';

const Blog = () => {
  return (
    <section className="[ mb-12-5 ]">
      <PageHeader title="Blogs" />
      {blogs && <PinnedBlogs blogs={blogs.slice(0, 3)} />}
      <Blogs blogs={blogs} />
    </section>
  );
};

export default Blog;
