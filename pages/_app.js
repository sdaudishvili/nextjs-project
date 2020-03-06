import '../styles/index.css'
import '../styles/sass/style.scss'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import JwtDecode from 'jwt-decode'
import Layout from '../components/layout/DefaultLayout'
import createStore from '../redux/store'
import { setUser } from '../redux/actions/userActions'

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const token = parseCookies(ctx).testUser
  if (token !== undefined) {
    const parsedToken = JwtDecode(token)
    const now = new Date().getTime() / 1000
    if (parsedToken.exp - now < 0) {
      destroyCookie(ctx, 'testUser')
    } else {
      ctx.store.dispatch(setUser(parsedToken.email))
    }
  }

  const { user } = ctx.store.getState().userState
  if (user !== '' && ctx.pathname === '/admin/auth/login') {
    ctx.res.writeHead(301, {
      'Cache-Control': 'no-cache',
      Location: '/admin'
    })
    ctx.res.end()
  } else if (ctx.pathname.includes('/admin') && ctx.pathname !== '/admin/auth/login') {
    ctx.res.writeHead(404, { 'Cache-Control': 'no-cache' })
    ctx.res.end()
  }
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx })
  }
  return { pageProps }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
