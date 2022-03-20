import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Transfer.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import receiver from "../../data dummy/receiver";
import ReceiverList from "../../components/ReceiverList";
import { useRouter } from 'next/router';

const TopUp = () => {
  const route = useRouter();

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card bg-light p-4">
              <h4>Search Receiver</h4>
              <form className="d-flex flex-row mb-5">
                <button className={`${styles.searchBtn} px-3 btn-secondary`}><BiSearchAlt2 className="fs-3"/></button>
                <input className={`${styles.input} form-control bg-secondary`} type='text' placeholder='Search receive here' />
              </form>
              {receiver.map((data, index) => {
                return <ReceiverList key={index} event={e => route.push(`/transfer/${index}`)} image={data.image} name={data.name} phone={data.phone} />
              })}
            </div>
          </section>
        </Row>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-primary text-dark">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalLabel">Topup</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <p className="ps-3">Enter the amount of money, and click submit</p>
              <div className="modal-body">
                <form>
                  <input className={`form-control text-center ${styles.inputModal}`} type='number' placeholder="___________" />
                </form>
              </div>
              <div className="modal-footer border-top-0">
                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default TopUp;
