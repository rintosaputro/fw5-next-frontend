/* eslint-disable no-nested-ternary */
import { AiOutlineMail } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { VscLock } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import AuthPage from '../../components/AuthPage';
import InputAuth from '../../components/InputAuth';
import styles from '../../styles/Auth.module.css';
import ButtonComp from '../../components/ButtonComp';
import { forgotPassword, sendOtp } from '../../redux/actions/auth';
import checkPassword from '../../helper/checkPwd';
import SpinnerLoad from '../../components/SpinnerLoad';

function ForgotPassword() {
  const [change, setChange] = useState(false);
  const [pwd, setPwd] = useState(false);

  const route = useRouter();

  const dispatch = useDispatch();
  const { forgotPassword: forgotData, sendOtp: changeData } = useSelector((state) => state);

  useEffect(() => {
    if (changeData.isSuccess) {
      route.push('/login');
      setChange(true);
    }
  }, [changeData]);

  const handleConfirm = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      dispatch(forgotPassword(email));
    } else {
      alert('Data must be fill');
    }
  };

  const changePwd = (e) => {
    e.preventDefault();
    const { otp } = route.query;
    const newPassword = document.getElementById('newPwd').value;
    const confirmPassword = document.getElementById('confirmPwd').value;
    if (checkPassword(newPassword) && newPassword) {
      if (newPassword === confirmPassword) {
        const data = { otp, newPassword, confirmPassword };
        dispatch(sendOtp(data));
      } else {
        alert('The password confirmation doesnt match');
      }
    } else {
      setPwd(true);
    }
  };

  return (
    <AuthPage
      info={(
        <>
          <h2>Did You Forgot Your Password? Don`t Worry, You Can Reset Your Password In a Minutes.</h2>
          <p className="my-5">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
        </>
      )}
      form={
        route.query.otp
          ? (change
            ? <div>{changeData.message}</div>
            : (
              <form>
                <InputAuth id="newPwd" IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`} />} type="text" placehld="new password" />
                {pwd && <div className="text-danger">The Password must be at least 6 characters long, use upper and lower case</div>}
                <InputAuth id="confirmPwd" IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`} />} type="text" placehld="confirm new password" />
                <div className="mt-5">
                  {changeData.isError && <div className="text-danger mb-4 fs-3">{changeData.message}</div>}
                  {changeData.isLoading ? <SpinnerLoad /> : <ButtonComp event={changePwd} block="true">Reset Password</ButtonComp>}
                </div>
              </form>
            ))
          : (forgotData.isSuccess ? <div>{forgotData.message}</div>
            : (
              <form>
                <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`} />} id="email" type="text" placehld="e-mail" />
                <div className="mt-5">
                  <ButtonComp event={handleConfirm} block="true">Confirm</ButtonComp>
                </div>
              </form>
            ))
      }
    />
  );
}

export default ForgotPassword;
