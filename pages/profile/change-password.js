import { Row } from 'react-bootstrap';
import { FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import InputAuth from '../../components/InputAuth';
import ButtonComp from '../../components/ButtonComp';
import { changePassword } from '../../redux/actions/auth';

function ChangePassword() {
  const [errMessage, setErrMessage] = useState('');
  const dispatch = useDispatch();
  const { changePassword: changePasswordState } = useSelector((state) => state);

  useEffect(() => {
    if (changePasswordState.isSuccess) {
      setTimeout(() => {
        dispatch({ type: 'CHANGE_PWD_CLEAR' });
      }, 6000);
    }
  }, [changePasswordState.isSuccess]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setErrMessage('');
    const oldPassword = document.getElementById('old').value;
    const newPassword = document.getElementById('new').value;
    const confirmPassword = document.getElementById('confirm').value;
    const data = {
      oldPassword, newPassword, confirmPassword,
    };
    if (newPassword !== confirmPassword) {
      setErrMessage('New and Confirm password are not the same!');
    } else if (!oldPassword || !newPassword || !confirmPassword) {
      setErrMessage('Data must be filled!');
    } else {
      const token = window.localStorage.getItem('token');
      dispatch(changePassword(token, data));
      setErrMessage('');
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
              <h4>Change Password</h4>
              <p className={`${styles.par} my-4`}>You must enter your current password and then type your new password twice.</p>
              <div className={`${styles.input} mx-auto`}>
                <InputAuth id="old" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="current password" />
                <InputAuth id="new" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="new password" />
                <InputAuth id="confirm" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="repeat new password" />
                {(changePasswordState.isError || errMessage) && <div className="bg-dark text-center fs-4 text-danger p-3 mt-5">{changePasswordState.errMessage || errMessage}</div>}
                {changePasswordState.isSuccess && <div className="bg-dark text-primary fs-3 text-center mt-5 p-3">Change password successfully!</div>}
                {changePasswordState.isLoading
                  ? (
                    <div className="d-flex justify-content-center align-items-center mt-5">
                      <div className="spinner-border" role="status" />
                    </div>
                  )
                  : <ButtonComp cls="mt-5" event={handleUpdate} display="true">Change Password</ButtonComp>}
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default ChangePassword;
