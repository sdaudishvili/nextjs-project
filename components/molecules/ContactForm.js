import { TextField, Button } from '@/components/atoms';

const ContactNote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit} className="[ text-1-4 grid grid-cols-2 gap-y-2-0 gap-x-3-0 ]">
      <TextField placeholder="Your Name" />
      <TextField placeholder="Your Email" />
      <TextField className="col-span-2" placeholder="Your Email" multiline rows={8} />
      <Button type="submit" className="w-mc">
        Send
      </Button>
    </form>
  );
};

export default ContactNote;
