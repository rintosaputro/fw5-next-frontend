// import AuthPage from "../components/AuthPage";
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { VscLock } from 'react-icons/vsc';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { addDataRegist } from '../../redux/actions/auth';
import ButtonComp from '../../components/ButtonComp';
import styles from '../../styles/Auth.module.css';
import InputAuth from '../../components/InputAuth';
import AuthPage from '../../components/AuthPage';
import checkPassword from '../../helper/checkPwd';

function Signup() {
  const [pwd, setPwd] = useState(false);

  const dispatch = useDispatch();
  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const pwdInput = document.getElementById('pwd').value;
    const name = `${first} ${last}`;
    if (first && last && email && pwdInput) {
      if (checkPassword(pwdInput)) {
        setPwd(false);
        dispatch(addDataRegist(name, email, pwdInput));
        route.push('/signup/pin');
      } else {
        setPwd(true);
      }
    } else {
      alert('Data must be filled');
    }
  };

  return (
    <AuthPage
      form={(
        <form>
          <InputAuth id="first" IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`} />} type="text" placehld="first name" />
          <InputAuth id="last" IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`} />} type="text" placehld="last name" />
          <InputAuth id="email" IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`} />} type="email" placehld="e-mail" />
          <InputAuth id="pwd" IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="password" />
          {pwd && <div className="text-danger">The Password must be at least 6 characters long, use upper and lower case</div>}
          <div className="my-5">
            <ButtonComp block="true" event={handleSubmit} type="submit" cls="mt-3">signup</ButtonComp>
          </div>
          <div className="d-flex justify-content-end">
            Already have an account? Lets
            <Link href="/login">
              <a className="fw-bold text-decoration-none ps-1 "> Login</a>
            </Link>
          </div>
        </form>
    )}
    />
  );
}

export default Signup;
