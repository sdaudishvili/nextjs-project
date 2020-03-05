import '../styles/index.css'
import '../styles/sass/style.scss'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
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

MyApp.getInitialProps = async (appContext) => {
  if (appContext.ctx.pathname.includes('/admin')) {
    appContext.ctx.res.writeHead(301, {
      Location: '/'
    })
    appContext.ctx.res.end()
  }

  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default withRedux(createStore)(MyApp)
