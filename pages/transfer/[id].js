/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Transfer.module.css';
// import receiver from '../../data dummy/receiver';
import ReceiverList from '../../components/ReceiverList';
import ButtonComp from '../../components/ButtonComp';
import { inputTransfer } from '../../redux/actions/transfer';
import getDate from '../../helper/getDate';
// import { transfer } from '../../redux/actions/transaction';

function Transfer() {
  const route = useRouter();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({});

  const { inputTransfer: inputData, users, balance } = useSelector((state) => state);

  useEffect(() => {
    users.results.forEach((data) => {
      if (data.id === Number(route.query.id)) {
        const { fullName, picture } = data;
        // const { picture } = data;
        setDataUser({ fullName, picture });
        if (data.phone.length > 0) {
          data.phone.forEach((item) => {
            if (item.isPrimary === 1) {
              const { number } = item;
              setDataUser({ fullName, picture, phone: number });
            }
          });
        }
      }
    });
  }, [users]);

  const handleClick = (e) => {
    e.preventDefault();
    const amount = document.getElementById('nominal').value;
    const notes = document.getElementById('note').value;
    const date = getDate();
    const balanceLeft = balance.results - amount;
    const idUser = route.query.id;
    const payload = {
      ...dataUser, amount, notes, balanceLeft, date, idUser,
    };
    if (amount > balance.results) {
      alert('nominal exceeds the limit');
    } else if (!amount) {
      alert('Please fill nominal transfer');
    } else {
      const token = window.localStorage.getItem('token');
      // dispatch(transfer(token, amount, Number(route.query.id), 121212, notes))
      dispatch(inputTransfer(payload));
      route.push('/transfer/confirmation');
    }
  };

  const test = (e) => {
    e.preventDefault();
    console.log(dataUser);
  };

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card bg-light p-4">
              <h4>Transfer Money</h4>
              <ReceiverList image={dataUser.picture || '/img/defaultPict.png'} name={dataUser.fullName || 'name'} phone={dataUser.phone || 'Phone not available'} />
              <p className="my-5">
                Type the amount you want to transfer and then
                <br />
                {' '}
                press continue to the next steps.
              </p>
              <form>
                <input id="nominal" type="number" placeholder="0.00" className={`${styles.input} form-control mb-4 fs-1 text-white fw-bold text-center w-100 bg-light`} />
                <div className="fw-bold text-center">
                  Rp
                  {Number(balance.results).toLocaleString('id-ID')}
                  {' '}
                  Available
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center my-5 position-relative">
                  <label><BsPencil className="text-muted position-absolute my-auto" style={{ bottom: '9px' }} /></label>
                  <input id="note" type="text" placeholder="Add some notes" className={`${styles.notes} ps-5 form-control bg-light text-white`} />
                </div>
                <div className="text-end">
                  <ButtonComp event={handleClick}>Continue</ButtonComp>
                </div>
              </form>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Transfer;
