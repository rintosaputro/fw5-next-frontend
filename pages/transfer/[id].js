import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Transfer.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import receiver from "../../data dummy/receiver";
import ReceiverList from "../../components/ReceiverList";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { BsPencil } from 'react-icons/bs';
import ButtonComp from "../../components/ButtonComp";
import { inputTransfer } from "../../redux/actions/transfer";
import { useDispatch } from "react-redux";
import getDate from "../../helper/getDate";

const Transfer = () => {
  const route = useRouter();
  const dispatch = useDispatch();

  const data = receiver[route.query.id]
  const available = 150000

  const handleClick = (e) => {
    e.preventDefault();
    const amount = document.getElementById('nominal').value;
    const notes = document.getElementById('note').value;
    const balanceLeft = available - amount;
    const date = getDate();
    const payload = {...data, amount, notes, balanceLeft, date}
    if (amount > available) {
      alert('nominal exceeds the limit')
    } else if (!amount) {
      alert('Please fill nominal transfer')
    } else {
      dispatch(inputTransfer(payload))
      route.push('/transfer/confirmation');
    }
  }

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card bg-light p-4">
              <h4>Transfer Money</h4>
               {/* {<ReceiverList image={data.image} name={data.name} phone={data.phone} />} */}
               <ReceiverList name='Jamal Tes' phone={Number('0898678685')} />
               <p className="my-5">Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
               <form>
                 <input id='nominal' type='number' placeholder="0.00" className={`${styles.input} form-control mb-4 fs-1 text-white fw-bold text-center w-100 bg-light`} />
                 <div className="fw-bold text-center">Rp{Number(available).toLocaleString('id-ID')} Available</div>
                 <div className="d-flex flex-row justify-content-center align-items-center my-5 position-relative">
                   <label><BsPencil className="text-muted position-absolute my-auto" style={{bottom: '9px'}} /></label>
                   <input id='note' type='text' placeholder='Add some notes' className={`${styles.notes} ps-5 form-control bg-light text-white`} />
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
  )
}

export default Transfer;
