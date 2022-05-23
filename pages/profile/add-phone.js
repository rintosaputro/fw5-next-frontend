import { Row } from 'react-bootstrap';
import { BsTelephone } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Profile.module.css';
import ButtonComp from '../../components/ButtonComp';
import InputAuth from '../../components/InputAuth';
import { checkPhone } from '../../helper/check';
import { addPhone, getPhoneList } from '../../redux/actions/profile';

function ChangePin() {
  const [errMessage, setErrMessage] = useState('');

  const dispatch = useDispatch();

  const { addPhone: addPhoneState } = useSelector((state) => state);

  useEffect(() => {
    if (addPhoneState.isSuccess) {
      const token = window.localStorage.getItem('token');
      dispatch(getPhoneList(token));
    }
  }, [addPhoneState.isSuccess]);

  const handleClick = (e) => {
    e.preventDefault();
    setErrMessage('');
    const phone = document.getElementById('phone').value;
    if (checkPhone(phone)) {
      const token = window.localStorage.getItem('token');
      dispatch(addPhone(token, phone));
    } else {
      setErrMessage('Phone number doesnt match!');
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
            <div className={`card px-4 py-5 bg-light ${styles.card}`}>
              <h4>Add Phone Number</h4>
              <p className={`${styles.par} my-4`}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
              <div className={`${styles.input} mx-auto`}>
                <InputAuth id="phone" IconElement={<BsTelephone className={`${styles.icon} fs-4 position-absolute`} />} type="number" placehld="phone number" />
                <div className="mt-5 text-danger fs-4">{errMessage}</div>
                {addPhoneState.isError && <div className="mt-5 text-danger fs-4">{addPhoneState.errMessage}</div>}
                {addPhoneState.isLoading ? (
                  <div className="d-flex justify-content-center flex-column align-items-center">
                    <div className="fs-3">Loading</div>
                    <div className="spinner-border mt-2" role="status" />
                  </div>
                )
                  : addPhoneState.isSuccess
                    ? <div className="text-center fs-2">Successfully added phone number!</div>
                    : <ButtonComp cls="mt-5" display="true" event={handleClick}>Add Phone Number</ButtonComp>}
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default ChangePin;
