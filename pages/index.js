import { MainContainer, Article } from '@/components/organisms';

const article = {
  title: 'Relax in our Hotel',
  image: 'https://colorlib.com/preview/theme/samira/images/about_intro.jpg',
  description:
    'Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
};

const Index = () => {
  return (
    <section>
      <MainContainer />
      <Article className="[ mt-8-5 ]" article={article} />
    </section>
  );
};

export default Index;
