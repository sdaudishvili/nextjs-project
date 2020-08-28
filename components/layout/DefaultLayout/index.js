import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main role="main" className="[ flex-1 ]">
        {children}
      </main>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.any
};

DefaultLayout.defaultProps = {
  children: null
};

export default DefaultLayout;
