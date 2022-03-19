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

const Transfer = () => {
  const route = useRouter();

  const data = receiver[route.query.id]
  useEffect(() => {
    console.log(route.pathname)
  })

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
               {<ReceiverList image={data.image} name={data.name} phone={data.phone} />}
               <p className="my-5">Type the amount you want to transfer and then <br/> press continue to the next steps.</p>
               <form>
                 <input type='number' placeholder="0.00" className={`${styles.input} form-control mb-4 fs-1 text-white fw-bold text-center w-100 bg-light`} />
                 <div className="fw-bold text-center">Rp{Number(3000).toLocaleString('id-ID')} Available</div>
                 <div className="d-flex flex-row justify-content-center align-items-center my-5 position-relative">
                   <label><BsPencil className="text-muted position-absolute my-auto" style={{bottom: '9px'}} /></label>
                   <input type='text' placeholder='Add some notes' className={`${styles.notes} ps-5 form-control bg-light text-white`} />
                 </div>
                 <div className="text-end">
                  <ButtonComp>Continue</ButtonComp>
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
