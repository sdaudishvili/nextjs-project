import { PageHeader } from '@/components/atoms';
import { ContactNote, Typography, ContactForm } from '@/components/molecules';

const contactItems = {
  address: '481 Creekside Lane Avila CA 93424',
  phone: '+53 345 7953 32453',
  email: 'yourmail@gmail.com'
};

const Contact = () => {
  return (
    <section>
      <PageHeader title="Contact" />
      <div className="container [ py-12-7 flex ]">
        <div className="[ w-1/3 px-1-5 ]">
          <Typography variant="h2">Contact Us</Typography>
          <Typography className="[ text-secondary-text ]">
            Send us message. We are always ready to answer your questions
          </Typography>
          <ContactNote contactItems={contactItems} className="[ text-1-6 mt-5-8 ]" />
        </div>
        <div className="[ w-2/3 px-1-5 ]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
