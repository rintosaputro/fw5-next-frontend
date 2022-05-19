/* eslint-disable react/prop-types */
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
// import { AiOutlineMail } from 'react-icons/ai';
// import { VscLock } from 'react-icons/vsc';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import ButtonComp from './ButtonComp';
// import InputAuth from './InputAuth';
import styles from '../styles/Auth.module.css';

function AuthPage({ form, info }) {
  return (
    <section>
      <Row>
        <Col sm={12} lg={6} className={`d-none d-lg-block ${styles.left}`}>
          <div className="p-5">
            <h1 className="fs-1">Zwallet</h1>
            <Image src="/img/auth-phone.png" alt="phone" layout="responsive" width={300} height={300} />
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
            {info || (
            <>
              <h2>
                Start Accessing Banking Needs
                <br />
                With All Devices and All Platforms
                <br />
                {' '}
                With 30.000+ Users
              </h2>
              <p className="my-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
            </>
            )}
            {form}
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AuthPage;
