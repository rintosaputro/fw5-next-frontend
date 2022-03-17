import { Col, Row } from "react-bootstrap"
import styles from '../styles/Auth.module.css';
import Image from "next/image";
import { AiOutlineMail } from 'react-icons/ai'
import InputAuth from "../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import Link from 'next/link';
import Button from "../components/Button";

const Login = () => {
  return (
    <section>
      <Row>
        <Col sm={12} lg={6} className={styles.left}>
          <div className="p-5">
            <h1 className='fs-1'>Zwallet</h1>
            <Image src='/img/auth-phone.png' alt='phone' layout="responsive" width={300} height={300}/>
            <h2 className="my-5">App that Convering Banking Needs.</h2>
            <p>
              Zwallet is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={6} className={styles.right}>
         <div className="p-5">
          <h2>Start Accessing Banking Needs <br />With All Devices and All Platforms<br/> With 30.000+ Users</h2>
          <p className="my-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
          <form>
           <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='e-mail' />
           <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='password' />
          </form>
          <Link href='/forgot'>
            <a className='d-flex justify-content-end text-decoration-none my-5'>Forgot password?</a>
          </Link>
          <div className="mt-5">
            <Button block cls='mt-5'>Login</Button>
          </div>
          <Link href='/signup'>
            <a className="text-decoration-none d-flex justify-content-end mt-4">Dont have an account? Lets <span className="text-primary fw-bold">Signup</span></a>
          </Link>
         </div>
        </Col>
      </Row>
    </section>
  )
}

export default Login
