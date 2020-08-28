import '../styles/sass/style.scss';
import '../styles/index.css';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { parseCookies, destroyCookie } from 'nookies';
import JwtDecode from 'jwt-decode';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Error from 'next/error';
import PropTypes from 'prop-types';
import AdminLayout from '../components/layout/AdminLayout';
import DefaultLayout from '../components/layout/DefaultLayout';
import createStore from '../redux/store';
import { setUser } from '../redux/actions/userActions';
import Notifications from '../components/organisms/Notifications';
import Loader from '../components/molecules/Loader';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10
  }
});
const App = ({ Component, pageProps, store, router }) => {
  // if (errorCode) {
  //   return <Error statusCode={404} />;
  // }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {router.pathname !== '/admin/auth/login' && router.pathname.includes('admin') && (
          <>
            <Notifications />
            <AdminLayout>
              <Loader />
              <Component {...pageProps} />
            </AdminLayout>
          </>
        )}
        {router.pathname === '/admin/auth/login' && <Component {...pageProps} />}
        {!router.pathname.includes('admin') && (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </ThemeProvider>
    </Provider>
  );
};
App.getInitialProps = async ({ Component, ctx }) => {
  if (ctx.isServer) {
    const token = parseCookies(ctx).testUser;
    if (typeof token !== 'undefined') {
      const parsedToken = JwtDecode(token);
      const now = new Date().getTime() / 1000;
      if (parsedToken.exp - now < 0) {
        destroyCookie(ctx, 'testUser');
      } else {
        ctx.store.dispatch(setUser(parsedToken.email));
        axios.defaults.headers.common.Authorization = token;
      }
    }
    const { user } = ctx.store.getState().userState;
    if (user !== '' && ctx.pathname === '/admin/auth/login') {
      ctx.res.writeHead(301, {
        'Cache-Control': 'no-cache',
        Location: '/admin'
      });
      ctx.res.end();
    } else if (
      (user === '' && ctx.pathname.includes('/admin') && ctx.pathname !== '/admin/auth/login') ||
      ctx.res.statusCode === 404
    ) {
      ctx.res.writeHead(404, {
        'Cache-Control': 'no-cache'
      });
      ctx.res.end();
    }
  }
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }
  return {
    ...pageProps
  };
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  store: PropTypes.object,
  router: PropTypes.object
};

App.defaultProps = {
  pageProps: {},
  store: {},
  router: {}
};
export default withRedux(createStore)(withReduxSaga(App));
