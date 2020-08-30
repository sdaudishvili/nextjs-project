import { PageHeader } from '@/components/atoms';
import { PinnedBlogs } from '@/components/organisms';
import { blogs } from '@/DUMMY_DATA';
import { SingleBlog } from '@/components/molecules';

const Blogs = () => {
  return (
    <section>
      <PageHeader title="Blogs" />
      {blogs && <PinnedBlogs blogs={blogs.slice(0, 3)} />}
      {blogs && (
        <div className="container [ grid grid-cols-3 gap-5-0 py-12-5 ]">
          {blogs && blogs.map((x) => <SingleBlog item={x} key={x.id} />)}
        </div>
      )}
    </section>
  );
};

export default Blogs;
