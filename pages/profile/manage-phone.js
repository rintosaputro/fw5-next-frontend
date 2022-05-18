/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { BiTrashAlt } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import ListDetail from '../../components/ListDetail';
import { deletePhone, getPhoneList } from '../../redux/actions/profile';

function Info() {
  const [idPhone, setIdPhone] = useState(null);

  const { phoneList, deletePhone: deletePhoneState } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (deletePhoneState.isSuccess) {
      const token = window.localStorage.getItem('token');
      dispatch(getPhoneList(token));
    }
  }, [deletePhoneState.isSuccess]);

  const handleClear = () => {
    dispatch({ type: 'ADD_PHONE_CLEAR' });
  };

  const handleDelete = (id, e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token');
    setIdPhone(id);
    dispatch(deletePhone(token, id));
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
              <div className="position-relative d-flex flex-row align-items-center justify-content-between">
                <ListDetail title={phoneList.phone ? 'Primary' : ''} desc={phoneList.phone || 'Phone number not available'} />
                {phoneList.phone && (
                  idPhone === phoneList.idPrimary && deletePhoneState.isLoading
                    ? <div className="spinner-border me-4" role="status" />
                    : (
                      <Link href="/profile/manage-phone">
                        <a onClick={(e) => handleDelete(phoneList.idPrimary, e)} className={`text-decoration-none position-absolute fs-2 ${styles.trash}`}>
                          <BiTrashAlt />
                        </a>
                      </Link>
                    )
                )}
              </div>
              {phoneList.results?.map((data) => {
                if (data.isPrimary === 0) {
                  return (
                    <div className="position-relative d-flex flex-row align-items-center justify-content-between" key={data.id}>
                      <ListDetail title="Secondary" desc={data.number} />
                      {idPhone === data.id && deletePhoneState.isLoading
                        ? <div className="spinner-border me-4" role="status" />
                        : (
                          <Link href="/profile/manage-phone">
                            <a onClick={(e) => handleDelete(data.id, e)} className={`text-decoration-none position-absolute fs-2 ${styles.trash}`}>
                              <BiTrashAlt />
                            </a>
                          </Link>
                        )}
                    </div>
                  );
                }
                return <div key={data.id} />;
              })}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Info;
