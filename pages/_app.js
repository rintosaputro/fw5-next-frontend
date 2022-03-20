import '../styles/globals.css'
import '../styles/scss/custom.scss'
import store from '../redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getProfile, getPhoneList } from '../redux/actions/auth';

const MyComponent = ({children}) => {
  const dispatch = useDispatch();
  const { login } = useSelector(state => state);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch({
        type: 'LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token
            }
          }
        }
      });
      dispatch(getProfile(token));
      dispatch(getPhoneList(token));
    }
  }, [])
  return (<>{children}</>)
}

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Provider store={store}>
    <MyComponent>
      <Component {...pageProps} />  
    </MyComponent>
  </Provider>
}

export default MyApp
