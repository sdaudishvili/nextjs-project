import { MainContainer, Article, Carousel } from '@/components/organisms';

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

const Index = () => {
  return (
    <section>
      <MainContainer />
      <Article className="[ mt-12-5 ]" article={article} />
      <div className="mt-12-5">
        <Carousel items={sliderItems} />
      </div>
    </section>
  );
};

export default Index;
