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

// MyApp.getInitialProps = async (appContext) => {
//   if (appContext.ctx.pathname.includes('/admin')) {
//     appContext.ctx.res.writeHead(301, {
//       Location: '/'
//     })
//     appContext.ctx.res.end()
//   }
// }

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx })
  }
  return { pageProps }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
