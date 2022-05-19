/* eslint-disable react/no-array-index-key */
import { Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import HistoriesList from '../components/HistoriesList';
import SideBar from '../components/SideBar';
import styles from '../styles/Histories.module.css';
import histories from '../data dummy/histories';

function Histories() {
  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card p-4 bg-light">
              <div className="mb-4 d-flex flex-row justify-content-between">
                <h4>Transaction History</h4>
                <form>
                  <select className="form-select bg-secondary text-center">
                    <option className="d-none">--Select Filter--</option>
                    <option value="1">1</option>
                  </select>
                </form>
              </div>
              {histories.map((data, index) => <HistoriesList key={index} image={data.image} name={data.name} status={data.status} total={data.total} />)}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Histories;
