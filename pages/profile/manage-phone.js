/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { BiTrashAlt } from 'react-icons/bi';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import ListDetail from '../../components/ListDetail';

function Info() {
  // const route = useRouter();

  // const { login, phoneList, email } = useSelector((state) => state);
  const { phoneList } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch({ type: 'ADD_PHONE_CLEAR' });
  };

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className={`card px-4 py-5 bg-light ${styles.card}`}>
              <h4>Manage Phone Number</h4>
              <p className={`${styles.par} my-4`}>You can only delete the phone number and then you must add another phone number.</p>
              <Link href="/profile/add-phone">
                <a onClick={handleClear} className="text-decoration-none mt-3 fs-4 fw-bold">
                  Add Phone Number
                </a>
              </Link>
              <div className="position-relative">
                <ListDetail title="Phone Number" desc={phoneList.phone || 'Phone number not available'} />
                <Link href="/profile/manage-phone">
                  <a className={`text-decoration-none position-absolute fs-2 ${styles.trash}`}>
                    <BiTrashAlt />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Info;
