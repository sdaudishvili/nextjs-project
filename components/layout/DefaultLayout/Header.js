import Logo from '../../atoms/Logo';
import Navigation from '../../molecules/Navigation';

function DefaultLayoutHeader() {
  return (
    <header className="[ bg-primary h-12-5 text-white z-2 px-base-x justify-between flex items-center ]">
      <Logo />
      <Navigation />
    </header>
  );
}

export default DefaultLayoutHeader;
