import '../styles/index.css'
import '../styles/sass/style.scss'
import Layout from '../components/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

App.getInitialProps = ({ ctx }) => {
  if (ctx.pathname.includes('/about')) {
    ctx.res.writeHead(301, {
      Location: '/'
    })
    ctx.res.end()
  }
  return {}
}

export default App
