import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Transfer.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import receiver from "../../data dummy/receiver";
import ReceiverList from "../../components/ReceiverList";
import { useRouter } from 'next/router';

const Transfer = () => {
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
                <input className={`${styles.input} form-control bg-secondary`} type='text' placeHolder='Search receive here' />
              </form>
              {receiver.map((data, index) => {
                return <ReceiverList key={index} event={e => route.push(`/transfer/${index}`)} image={data.image} name={data.name} phone={data.phone} />
              })}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Transfer;
