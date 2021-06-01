import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { Provider as AuthProvider } from 'next-auth/client'
const PId = "123"
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
