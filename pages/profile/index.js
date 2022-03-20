import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import { BsPencil } from 'react-icons/bs';
import ButtonComp from "../../components/ButtonComp";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from "next/router";

const Profile = () => {
  const route = useRouter();

  const { login, phoneList } = useSelector(state => state);
  const defaultPict = '/img/defaultPict.png'
  const { picture, fullName } = login.results

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card px-4 py-5 bg-light">
              <div className={`${styles.pict} mx-auto`} style={{backgroundImage: `url(${picture || defaultPict})`}} />
              <div className="position-relative">
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button className="btn text-white p-0 me-2"><BsPencil/></button>
                  <span>Edit</span>
                </div>
                <form>
                  <input id='image' style={{zIndex: 134, right: '134px', opacity: '0', cursor: 'pointer'}} className='bottom-0 position-absolute' type="file" />
                </form>
              </div>
              <div className="text-center my-3">
                <h4>{fullName}</h4>
                <div>{phoneList.phone}</div>
              </div>
              <div className="d-flex flex-column justify-content-center mt-3">
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4' event={e => route.push('/profile/info')}>
                  <span className="text-start">Personal Information</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4'>
                  <span className="text-start">Change Password</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4'>
                  <span className="text-start">Personal Information</span>
                  <AiOutlineArrowRight className="text-end" />
                </ButtonComp>
                <ButtonComp cls='d-flex justify-content-between align-items-center mx-auto w-75 mt-4'>
                  <span className="text-start">Personal Information</span>
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
