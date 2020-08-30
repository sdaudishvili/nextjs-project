import { PageHeader } from '@/components/atoms';
import { PinnedBlogs, BlogsList } from '@/components/organisms';
import { blogs } from '@/DUMMY_DATA';

const Blogs = () => {
  return (
    <section>
      <PageHeader title="Blogs" />
      {blogs && <PinnedBlogs blogs={blogs.slice(0, 3)} />}
      <BlogsList blogs={blogs} />
    </section>
  );
};

export default Blogs;
