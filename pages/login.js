import AuthPage from "../components/AuthPage";
import { AiOutlineMail } from 'react-icons/ai'
import InputAuth from "../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import styles from '../styles/Auth.module.css';
import Link from 'next/link';
import ButtonComp from "../components/ButtonComp";
import { login } from "../redux/actions/auth";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const { login : loginState } = useSelector(state => state);

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      route.push('/home');
    }
  }, [loginState])


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
      alert('Data must be filled')
    }
    dispatch(login(email, password));
  }

  return (
    <AuthPage
    form={
      <>
      <form>
        <InputAuth id='email' IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} type='email' placehld='e-mail' />
        <InputAuth id='password' IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='password'  />
      </form>
      <Link href='/forgotPassword'>
        <a className='d-flex justify-content-end text-decoration-none my-5'>Forgot password?</a>
      </Link>
      <div className="my-5">
        {loginState.isLoading 
        ? <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        : <ButtonComp block='true' event={handleSubmit} cls='mt-5'>Login</ButtonComp>}
      </div>
      <div className="d-flex justify-content-end">
          Dont have an account? Lets
          <Link href='/signup'>
            <a className="fw-bold text-decoration-none ps-1"> Signup</a>
          </Link>
        </div>
      </>
    }
    />
  )
}

export default Login
