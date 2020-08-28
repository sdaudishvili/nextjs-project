import { Input, Button } from '@/components/atoms';

const Subscribe = () => {
  return (
    <div className="[ flex text-1-4 ]">
      <Input placeholder="Your e-mail" variant="outlined" className="[ flex-1 border-r-0 ]" />
      <Button>Subscribe</Button>
    </div>
  );
};

export default Subscribe;
