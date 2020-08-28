import { Subscribe } from '@/components/molecules';

const DefaultLayoutFooter = () => {
  return (
    <footer className="container">
      <div className="[ pt-9-0 pb-7-0 flex ]">
        <div className="[ flex-1 pr-2-0 ]">
          <div className="[ text-secondary-text text-1-2 font-m-sbd ]">LUXURY RESORT</div>
          <div className="[ text-4-4 font-p-bd mt-1-0 ]">Our Newsletter</div>
          <div className="[ mt-2-8 text-secondary-text font-m-md text-1-4 leading-2 ]">
            Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo
            ligula. Nullam molestie volutp at sapien.
          </div>
        </div>
        <div className="[ w-60-percent pl-2-0 mt-9-0 ]">
          <Subscribe />
        </div>
      </div>
      <div className="[ border-b-2 border-border border-solid ]" />
      <div className="[ pt-8-7 pb-6-0 ]" />
    </footer>
  );
};

export default DefaultLayoutFooter;
