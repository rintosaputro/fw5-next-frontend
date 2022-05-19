/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import '../styles/globals.css';
import '../styles/scss/custom.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import store from '../redux/store';
import { getProfile } from '../redux/actions/auth';
import { getPhoneList } from '../redux/actions/profile';
import { getUsers } from '../redux/actions/users';

function MyComponent({ children }) {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      dispatch({
        type: 'LOGIN_FULFILLED',
        payload: {
          data: {
            results: {
              token,
            },
          },
        },
      });
      dispatch(getProfile(token));
      dispatch(getPhoneList(token));
      dispatch(getUsers(token));
    }
  }, [login.token]);
  return (<>{children}</>);
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Provider store={store}>
      <MyComponent>
        <Component {...pageProps} />
      </MyComponent>
    </Provider>
  );
}

export default MyApp;
