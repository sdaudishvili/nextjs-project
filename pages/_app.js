import '../styles/sass/style.scss';
import '../styles/index.css';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { parseCookies, destroyCookie } from 'nookies';
import JwtDecode from 'jwt-decode';
import Layout from '../components/layout/DefaultLayout';
import createStore from '../redux/store';
import { setUser } from '../redux/actions/userActions';
import Notifications from '../components/organisms/Notifications';
import Loader from '../components/molecules/Loader';

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Notifications />
      <Loader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const token = parseCookies(ctx).testUser;
  if (token !== undefined) {
    const parsedToken = JwtDecode(token);
    const now = new Date().getTime() / 1000;
    if (parsedToken.exp - now < 0) {
      destroyCookie(ctx, 'testUser');
    } else {
      ctx.store.dispatch(setUser(parsedToken.email));
      axios.default.defaults.headers.common.Authorization = token;
    }
  }

  const { user } = ctx.store.getState().userState;
  if (user !== '' && ctx.pathname === '/admin/auth/login') {
    ctx.res.writeHead(301, {
      'Cache-Control': 'no-cache',
      Location: '/admin'
    });
    ctx.res.end();
  } else if (user === '' && ctx.pathname.includes('/admin') && ctx.pathname !== '/admin/auth/login') {
    ctx.res.writeHead(404, { 'Cache-Control': 'no-cache' });
    ctx.res.end();
  }
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  return { ...pageProps };
};

export default withRedux(createStore)(withReduxSaga(MyApp));
