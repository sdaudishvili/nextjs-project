import { PageHeader } from '@/components/atoms';
import { Article } from '@/components/organisms';
import { HtmlText } from '@/components/molecules';
import { aboutUs } from '@/DUMMY_DATA';

const About = () => {
  return (
    <section className="[ mb-12-5 ]">
      <PageHeader title="About Us" />
      {aboutUs && <Article className="[ mt-12-5 ]" article={aboutUs} />}
      <HtmlText className="[ mt-8-0 ]" />
    </section>
  );
};

export default About;
