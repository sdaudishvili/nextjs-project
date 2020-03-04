import '../styles/index.css'
import '../styles/sass/style.scss'
import { Provider } from 'react-redux'

import Layout from '../components/layout/DefaultLayout'
import store from '../redux/store'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

App.getInitialProps = ({ ctx }) => {
  if (ctx.pathname.includes('/admin')) {
    ctx.res.writeHead(301, {
      Location: '/'
    })
    ctx.res.end()
  }
  return {}
}

export default App
