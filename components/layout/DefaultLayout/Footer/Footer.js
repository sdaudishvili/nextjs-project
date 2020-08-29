import { Subscribe, BottomFooter } from './components';

const DefaultLayoutFooter = () => {
  return (
    <footer className="container">
      <Subscribe className="[ pt-9-0 pb-7-0 ]" />
      <div className="[ border-b-2 border-border border-solid ]" />
      <BottomFooter className="[ pt-8-7 pb-6-0 ]" />
    </footer>
  );
};

export default DefaultLayoutFooter;
