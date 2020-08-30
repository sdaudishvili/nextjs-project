import { Subscribe, BottomFooter } from './components';

const contactItems = {
  address: '481 Creekside Lane Avila CA 93424',
  phone: '+53 345 7953 32453',
  email: 'yourmail@gmail.com'
};

const DefaultLayoutFooter = () => {
  return (
    <footer className="container">
      <Subscribe />
      <div className="[ border-b-2 border-border border-solid ]" />
      <BottomFooter contactItems={contactItems} className="[ pt-8-7 pb-6-0 ]" />
    </footer>
  );
};

export default DefaultLayoutFooter;
