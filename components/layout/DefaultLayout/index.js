import Header from './Header';

function DefaultLayout(props) {
  return (
    <>
      <Header />
      <main role="main" className="[ flex-1 ]">
        {props.children}x{' '}
      </main>
    </>
  );
}

export default DefaultLayout;
