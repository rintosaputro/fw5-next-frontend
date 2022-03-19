import '../styles/globals.css'
import '../styles/scss/custom.scss'
import store from '../redux/store';
import { Provider } from 'react-redux';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
