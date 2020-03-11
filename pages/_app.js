import '../styles/sass/style.scss';
import '../styles/index.css';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { parseCookies, destroyCookie } from 'nookies';
import JwtDecode from 'jwt-decode';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Error from 'next/error';
import Layout from '../components/layout/DefaultLayout';
import createStore from '../redux/store';
import { setUser } from '../redux/actions/userActions';
import Notifications from '../components/organisms/Notifications';
import Loader from '../components/molecules/Loader';

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10
    }
});
function MyApp({ Component, pageProps, store, router, errorCode }) {
    if (errorCode) {
        return <Error statusCode={404} />;
    }
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Notifications />
                {router.pathname !== '/admin/auth/login' && router.pathname.includes('admin') && (
                    <Layout>
                        <Loader />
                        <Component {...pageProps} />
                    </Layout>
                )}
                {router.pathname === '/admin/auth/login' && <Component {...pageProps} />}
                {!router.pathname.includes('admin') && <Component {...pageProps} />}
            </ThemeProvider>
        </Provider>
    );
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
    if (ctx.isServer) {
        const token = parseCookies(ctx).testUser;
        if (token !== undefined) {
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

export default withRedux(createStore)(withReduxSaga(MyApp));
