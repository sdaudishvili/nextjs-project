import '../styles/index.css'
import '../styles/sass/style.scss'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Layout from '../components/layout/DefaultLayout'
import createStore from '../redux/store'

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
  // if (ctx.pathname.includes('/test')) {
  //   ctx.res.writeHead(301, {
  //     'Cache-Control': 'no-cache',
  //     Location: '/'
  //   })
  //   ctx.res.end()
  // }

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
