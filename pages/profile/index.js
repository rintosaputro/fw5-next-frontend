import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import ButtonComp from '../../components/ButtonComp';
import { getProfile, updateProfile } from '../../redux/actions/profile';
import { checkEmail } from '../../helper/check';

function Profile() {
  const route = useRouter();
  const [change, setChange] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [successMessage, setSuccessmessage] = useState('');
  const dispatch = useDispatch();
  const { login, updateProfile: updateProfileState } = useSelector((state) => state);

  useEffect(() => {
    if (updateProfileState.isSuccess) {
      const token = window.localStorage.getItem('token');
      dispatch(getProfile(token));
      setChange(false);
      setSuccessmessage('Update profile successfully!');
      setTimeout(() => {
        setSuccessmessage('');
      }, 6000);
    }
  }, [updateProfileState.isSuccess]);

  const defaultPict = '/img/defaultPict.png';
  const { picture, email, fullName } = login.results;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    route.push('/login');
  };

  const loadFile = (e) => {
    e.preventDefault();
    document.getElementById('fileUpload').innerHTML = `File: ${e.target.files[0].name}`;
    setChange(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setErrMessage('');
    const token = window.localStorage.getItem('token');
    const nameInput = document.getElementById('fullName').value;
    const emailInput = document.getElementById('email').value;
    const image = document.getElementById('image').files[0];
    const data = {
      fullName: nameInput !== fullName ? nameInput : '',
      email: emailInput !== email ? email : '',
      picture: image || null,
    };
    if (!checkEmail(emailInput)) {
      setErrMessage('Email does not match!');
    } else {
      dispatch(updateProfile(token, data));
      setErrMessage('');
    }
  };

  const handleChange = (id, currentData) => {
    const input = document.getElementById(`${id}`).value;
    if (currentData !== input) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card px-4 py-5 bg-light">
              <div className={`${styles.pict} mx-auto`} style={{ backgroundImage: `url(${picture || defaultPict})` }} id="picture">
                <form>
                  <input
                    id="image"
                    style={{
                      zIndex: 134, opacity: '0', cursor: 'pointer',
                    }}
                    className={`${styles.file} bg-primary position-absolute`}
                    onChange={loadFile}
                    type="file"
                  />
                </form>
              </div>
              <div id="fileUpload" className="text-center my-1" />
              <div className="position-relative" style={{ zIndex: 2 }}>
                <button onClick={handleUpdate} className="btn d-flex justify-content-center text-white align-items-center mx-auto mt-3" type="button">
                  <div className="text-white p-0 me-2"><BsPencil /></div>
                  <span>Edit</span>
                </button>
              </div>
              <form className="text-center my-3">
                <input id="fullName" onChange={() => handleChange('fullName', fullName)} type="text" placeholder={fullName || 'name user'} className={`text-center text-white bg-light form-control border-0 fs-3 ${styles.editInput}`} defaultValue={fullName} />
                <input id="email" onChange={() => handleChange('email', email)} type="email" placeholder={email || 'Email user'} className={`text-center text-white bg-light form-control border-0 fs-3 ${styles.editInput}`} defaultValue={email} />
                {/* <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={phoneList.phone || 'Phone number not available'} className={`text-center text-white bg-light form-control border-0 fs-3 ${styles.editInput}`} /> */}
                {(errMessage || updateProfileState.isError) && <div className="fs-2 text-danger">{updateProfileState.errMessage || errMessage}</div>}
                {successMessage && <div className="bg-dark w-75 mx-auto p-3 text-primary fs-3 fw-bold">{successMessage}</div>}
                {updateProfileState.isLoading
                  ? <div className="spinner-border mt-3" role="status" />
                  : (change && <ButtonComp cls="mt-3" event={handleUpdate}>Save Update</ButtonComp>)}
              </form>
              <div className="d-flex flex-column justify-content-center mt-3">
                <ButtonComp cls="d-flex justify-content-between align-items-center mx-auto w-75 mt-4" event={() => route.push('/profile/info')}>
                  <span className="text-start">Personal Information</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls="d-flex justify-content-between align-items-center mx-auto w-75 mt-4" event={() => route.push('/profile/change-password')}>
                  <span className="text-start">Change Password</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls="d-flex justify-content-between align-items-center mx-auto w-75 mt-4" event={() => route.push('/profile/change-pin')}>
                  <span className="text-start">Change PIN</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp event={handleLogout} cls="d-flex justify-content-between align-items-center mx-auto w-75 mt-4">
                  <span className="text-start">Log Out</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Profile;
