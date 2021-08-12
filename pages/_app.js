import '../styles/globals.css'
import { Provider } from 'react-redux'
import Store from '../redux/store/store'
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
