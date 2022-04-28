import { Row } from 'react-bootstrap';
import { FiLock } from 'react-icons/fi';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import InputAuth from '../../components/InputAuth';
import ButtonComp from '../../components/ButtonComp';

function ChangePassword() {
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
                <InputAuth id="first" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="current password" />
                <InputAuth id="second" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="new password" />
                <InputAuth id="third" IconElement={<FiLock className={`${styles.icon} fs-4 position-absolute`} />} type="password" placehld="repeat new password" />
                <ButtonComp cls="mt-5" display="true">Change Password</ButtonComp>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default ChangePassword;
