import { PageHeader } from '@/components/atoms';
import { PinnedBlogs, Blogs } from '@/components/organisms';
import { blogs } from '@/DUMMY_DATA';

const Blog = () => {
  return (
    <section>
      <PageHeader title="Blogs" />
      {blogs && <PinnedBlogs blogs={blogs.slice(0, 3)} />}
      <Blogs blogs={blogs} />
    </section>
  );
};

export default Blog;
