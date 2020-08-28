import { Navigation } from '@/components/molecules';
import { Logo, Button } from '@/components/atoms';

function DefaultLayoutHeader() {
  return (
    <header className="[ bg-primary-bg h-12-5 text-white z-2 justify-between flex items-center pr-base-x ]">
      <Logo />
      <Navigation />
      <Button>Button</Button>
    </header>
  );
}

export default DefaultLayoutHeader;
