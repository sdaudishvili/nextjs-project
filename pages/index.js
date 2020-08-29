import { MainContainer, Article, Carousel, PinnedBlogs } from '@/components/organisms';

const article = {
  title: 'About Us',
  image: 'https://colorlib.com/preview/theme/samira/images/about_intro.jpg',
  description:
    'Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
};

const sliderItems = [
  'https://colorlib.com/preview/theme/samira/images/gallery_1.jpg',
  'https://colorlib.com/preview/theme/samira/images/gallery_2.jpg',
  'https://colorlib.com/preview/theme/samira/images/gallery_3.jpg',
  'https://colorlib.com/preview/theme/samira/images/gallery_4.jpg',
  'https://colorlib.com/preview/theme/samira/images/gallery_5.jpg'
];

const pinnedBlogs = [
  {
    image: '/images/pinnedBlog.jpg',
    title: 'Rooms with private swimming pool',
    description:
      'Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor per inceptos himenaeos laoreet quis. Class aptent taciti soci osqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  }
];

const Index = () => {
  return (
    <section>
      <MainContainer />
      <Article className="[ mt-12-5 ]" article={article} />
      <PinnedBlogs className="[ mt-12-5 ]" blogs={pinnedBlogs} />
      <Carousel className="[ mt-12-5 ]" items={sliderItems} />
    </section>
  );
};

export default Index;
