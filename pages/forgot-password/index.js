import AuthPage from "../../components/AuthPage";
import InputAuth from "../../components/InputAuth";
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../../styles/Auth.module.css';
import ButtonComp from "../../components/ButtonComp";
import { useState, useEffect } from "react";
import { VscLock } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { forgotPassword } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import SpinnerLoad from "../../components/SpinnerLoad";

const ForgotPassword = () => {
  const [status, setStatus] = useState('');

  const route = useRouter();

  const dispatch = useDispatch();
  const { forgotPassword: forgotData } = useSelector(state => state);

  useEffect(() => {
    console.log(route.query.otp)
  })

  const handleConfirm = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      dispatch(forgotPassword(email));
    } else {
      alert('Data must be fill');
    }
    // setStatus(email)
  }

  return (
    <AuthPage 
      info={
        <>
        <h2>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
        <p className="my-5">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
        </>
      }
      form={
        route.query.otp ?
        <form>
          <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='new password'  />
          <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='confirm new password'  />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block>Reset Password</ButtonComp>
          </div>
        </form>
        : 
        (forgotData.isLoading 
        ? (forgotData.isSuccess ? <div>{forgotData.message}</div> : <SpinnerLoad/>)
        : <form>
          <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} id='email' type='text' placehld='e-mail' />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block>Confirm</ButtonComp>
          </div>
        </form>)
      }
    />
  )
}

export default ForgotPassword;
