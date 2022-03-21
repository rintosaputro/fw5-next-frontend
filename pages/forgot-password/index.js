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
import { changePassword } from "../../redux/actions/auth";
import checkPassword from "../../helper/checkPwd";

const ForgotPassword = () => {
  const [status, setStatus] = useState('');
  const [change, setChange] = useState(false);
  const [pwd, setPwd] = useState(false);

  const route = useRouter();

  const dispatch = useDispatch();
  const { forgotPassword: forgotData, changePassword: changeData } = useSelector(state => state);

  useEffect(() => {
    console.log(route.query.otp)
    if (changeData.isSuccess) {
      route.push('/login')
    }
  }, [changeData])

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

  const changePwd = (e) => {
    e.preventDefault();
    const otp = route.query.otp;
    const newPwd = document.getElementById('newPwd').value;
    const confirmPwd = document.getElementById('confirmPwd').value;
    if (checkPassword(newPwd) && newPwd) {
      if (newPwd === confirmPwd) {
        alert('ok')
        dispatch(changePassword(otp, newPwd, confirmPwd));
      } else {
        alert('The password confirmation doesnt match')
      }
    } else {
      setPwd(true);
    }
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
        (change 
        ? <div>{changeData.message}</div>
        : <form>
          <InputAuth id='newPwd' IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='new password'  />
          {pwd && <div className="text-danger">The Password must be at least 6 characters long, use upper and lower case</div>}
          <InputAuth id='confirmPwd' IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='confirm new password'  />
          <div className="mt-5">
            <ButtonComp event={changePwd} block='true'>Reset Password</ButtonComp>
          </div>
        </form>)
        : 
        (forgotData.isSuccess ? <div>{forgotData.message}</div>
        : <form>
          <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} id='email' type='text' placehld='e-mail' />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block='true'>Confirm</ButtonComp>
          </div>
        </form>)
      }
    />
  )
}

export default ForgotPassword;
