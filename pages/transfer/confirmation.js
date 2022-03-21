import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Transfer.module.css';
import receiver from "../../data dummy/receiver";
import ReceiverList from "../../components/ReceiverList";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import ButtonComp from "../../components/ButtonComp";
import PinInput from "react-pin-input";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineDownload } from 'react-icons/ai';

const Transfer = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [code, setCode] = useState();
  const [success, setSuccess] = useState(false);
  const [confirm, setConfirm] = useState(false);

  let pin;
  const { inputTransfer } = useSelector(state => state);

  const data = receiver[route.query.id]

  const handleCode = (e) => {
    e.preventDefault();
    setConfirm(true)
    if (code === '123456') {
      setSuccess(true)
    } else {
      alert('Wrong input code!')
    }
    window.scrollTo(0, 0)
    console.log(code)
    // route.push('/transfer/confirmation');
  }

  const listDetail = (title, desc) => {
    return (
      <div className={`${styles.cardList} card bg-light p-3 mt-3`}>
        <div>{title}</div>
        <h5 className="mt-3 fw-bold">{desc}</h5>
      </div>
    )
  }

  const dataDummy = {
    amount: "452",
    balanceLeft: 149548,
    date: "April 19, 2022 23:1",
    image: "/img/review-1.jpg",
    name: "Samuel Sushi",
    notes: "tes",
    phone: "+62 81345142",
  }

  // const {image, name, phone, amount, balanceLeft, date, notes} = inputTransfer.results;
  const {image, name, phone, amount, balanceLeft, date, notes} = dataDummy;

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card bg-light p-4">
             {confirm 
             ? (success ? <div className="d-flex align-items-center justify-content-center flex-column">
                <div className={`bg-primary d-flex align-items-center justify-content-center my-4 ${styles.pill}`}><AiOutlineCheck className="fs-1"/></div>
                <h4>Transfer Success</h4>
               </div>
               : <div className="d-flex align-items-center justify-content-center flex-column">
                 <div className={`bg-danger text-white d-flex align-items-center justify-content-center my-4 ${styles.pill}`}><AiOutlineCheck className="fs-1"/></div>
                 <h4>Transfer Failed</h4>
                 <p className="px-5 text-center mt-3">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
               </div> 
               )
             : <div>
                <h4>Transfer To</h4>
                <ReceiverList image={image} name={name} phone={phone} />
              </div>}
              <h4 className="my-5">Details</h4>
              {listDetail('Amount', `Rp${Number(amount).toLocaleString('id-ID')}`)}
              {listDetail('Balance Left', `Rp${Number(balanceLeft).toLocaleString('id-ID')}`)}
              {listDetail('Date & Time', date)}
              {listDetail('Notes', notes)}
              {confirm &&
              <div className="mt-5">
                <h4>Transfer To</h4>
                <ReceiverList image={image} name={name} phone={phone} />
              </div>}
              <div className="mt-5 text-end">
                {success && <ButtonComp variant="secondary me-4">
                  <AiOutlineDownload className=""/> Download PDF
                </ButtonComp>}
                {confirm && success ?
                <ButtonComp event={e => route.push('/home')}>Back to Home</ButtonComp>
                : <ButtonComp type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
                  {confirm && !success ? 'Try Again' : 'Continue'}
                </ButtonComp>}
              </div>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className={`modal-content bg-primary text-dark ${styles.modal}`}>
                    <div className={`modal-header ${styles.borderNone}`}>
                      <h5 className="modal-title" id="exampleModalLabel">Enter PIN to Transfer</h5> <br/>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <p className="px-3">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                    <div className="modal-body px-3">
                    <PinInput 
                    length={6} 
                    focus
                    ref={(n) => (pin = n)}
                    onChange={(value, index) => {setCode(value)}}
                    type="numeric" 
                    inputMode="number"
                    style={{padding: '10px'}}  
                    inputStyle={{borderColor: 'black', color: 'black'}}
                    inputFocusStyle={{borderColor: 'teal'}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />
                    </div>
                    <div className={`modal-footer ${styles.borderNone}`}>
                      <button type="button" className="btn btn-light fw-bold py-3 px-4" onClick={handleCode} data-bs-dismiss="modal">Continue</button>
                      {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Transfer;
