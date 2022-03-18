import AuthPage from "../components/AuthPage";
import InputAuth from "../components/InputAuth";
import { AiOutlineMail } from 'react-icons/ai';
import styles from '../styles/Auth.module.css';
import ButtonComp from "../components/ButtonComp";
import { useState } from "react";
import { VscLock } from 'react-icons/vsc';

const ForgotPassword = () => {
  const [status, setStatus] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    setStatus(email)
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
        status ?
        <form>
          <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='new password'  />
          <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='confirm new password'  />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block>Reset Password</ButtonComp>
          </div>
        </form>
        : <form>
          <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} id='email' type='text' placehld='e-mail' />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block>Confirm</ButtonComp>
          </div>
        </form>
      }
    />
  )
}

export default ForgotPassword;
