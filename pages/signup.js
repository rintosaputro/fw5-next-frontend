import AuthPage from "../components/AuthPage";
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import InputAuth from "../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import styles from '../styles/Auth.module.css';
import Link from 'next/link';
import ButtonComp from "../components/ButtonComp";
import { signup } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router';

const Signup = () => {
  const dispatch = useDispatch();
  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;
    const name = first + ' ' + last;
    dispatch(signup(name, email, pwd));
    route.push('/pin')
  }

  return (
    <AuthPage
    form={
      <>
      <form>
        <InputAuth id='first' IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='first name' />
        <InputAuth id='last' IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='last name' />
        <InputAuth id='email' IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} type='email' placehld='e-mail' />
        <InputAuth id='pwd' IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='password'  /> 
        <div className="my-5">
          <ButtonComp block='true' event={handleSubmit} type='submit' cls='mt-3'>signup</ButtonComp>
        </div>
        <div className="d-flex justify-content-end">
          Already have an account? Lets
          <Link href='/login'>
            <a className="fw-bold text-decoration-none ps-1 "> Login</a>
          </Link>
        </div>
      </form>
      </>
    }
    />
  )
}

export default Signup
