import Logo from '../../atoms/Logo';
import Navigation from '../../molecules/Navigation';

function DefaultLayoutHeader() {
  return (
    <header className="[ bg-primary-bg h-12-5 text-white z-2 justify-between flex items-center pr-base-x ]">
      <Logo />
      <Navigation />
      <div className="w-10-0" />
    </header>
  );
}

export default DefaultLayoutHeader;
