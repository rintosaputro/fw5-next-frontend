import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import { BsPencil } from 'react-icons/bs';
import ButtonComp from "../../components/ButtonComp";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from "next/router";
import { useState } from "react";

const Profile = () => {
  const route = useRouter();

  const dispatch = useDispatch();

  const { login, phoneList } = useSelector(state => state);
  const defaultPict = '/img/defaultPict.png'
  const { picture, fullName } = login.results

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT'
    })
    route.push('/login');
  }

  const loadFile = (e) => {
    e.preventDefault();
    const image = document.getElementById('picture')
    document.getElementById('fileUpload').innerHTML = 'File: ' + e.target.files[0].name
  }

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card px-4 py-5 bg-light">
              <div className={`${styles.pict} mx-auto`} style={{backgroundImage: `url(${picture || defaultPict})`}} id='picture'>
                <form>
                  <input id='image' style={{zIndex: 134, right: '134px', opacity: '0', cursor: 'pointer'}} className={`${styles.file}`} onChange={loadFile} type="file" />
                </form>
              </div>
              <div id='fileUpload' className="text-center my-1"></div>
              <div className="position-relative">
                <button className="btn d-flex justify-content-center text-white align-items-center mx-auto mt-3">
                  <div className="text-white p-0 me-2"><BsPencil/></div>
                  <span>Edit</span>
                </button>
              </div>
              <form className="text-center my-3">
                <input type='text' placeholder={fullName || 'name user'} className={`text-center text-white bg-light form-control border-0 fs-3 ${styles.editInput}`} />
                <input type='tel' placeholder={phoneList.phone || '08------'} className={`text-center text-white bg-light form-control border-0 fs-3 ${styles.editInput}`} />
                {/* <h4>{fullName || 'name user'}</h4> */}
                {/* <div>{phoneList.phone}</div> */}
              </form>
              <div className="d-flex flex-column justify-content-center mt-3">
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4' event={e => route.push('/profile/info')}>
                  <span className="text-start">Personal Information</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4' event={e => route.push('/profile/change-password')}>
                  <span className="text-start">Change Password</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4' event={e => route.push('/profile/change-pin')}>
                  <span className="text-start">Change PIN</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp event={handleLogout} cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4'>
                  <span className="text-start">Log Out</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Profile;
