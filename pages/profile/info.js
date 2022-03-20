import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import { useRouter } from "next/router";
import ListDetail from "../../components/ListDetail";
import Link from "next/link";

const Info = () => {
  const route = useRouter();

  const { login, phoneList, email } = useSelector(state => state);
  const defaultPict = '/img/defaultPict.png'
  const { picture, fullName } = login.results
  // const name = fullName.split(' ');

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card px-4 py-5 bg-light">
              <h4>Personal Information</h4>
              <p className={`${styles.par} my-4`}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
              <ListDetail title='First Name' desc={fullName || 'user first name'}/>
              <ListDetail title='Last Name' desc={fullName || 'user last name'}/>
              <ListDetail title='Verified E-mail' desc={email || 'email user'}/>
              <div className="position-relative">
                <ListDetail title='Phone Number' desc={phoneList.phone || '+62 ----'}/>
                <Link href='/profile/manage-phone'>
                  <a className={`text-decoration-none position-absolute ${styles.manage}`}>Manage</a>
                </Link>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Info;
