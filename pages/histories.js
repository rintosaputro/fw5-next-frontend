/* eslint-disable react/no-array-index-key */
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import HistoriesList from '../components/HistoriesList';
import SideBar from '../components/SideBar';
import styles from '../styles/Histories.module.css';
import SpinnerLoad from '../components/SpinnerLoad';
import histoyList from '../helper/historyList';
import { getHistory } from '../redux/actions/histories';

function Histories() {
  const dispatch = useDispatch();
  const { histories, allUser } = useSelector((state) => state);
  const defaultPict = '/img/defaultPict.png';

  useEffect(() => {
    if (histories.results.length === 0) {
      const token = window.localStorage.getItem('token');
      dispatch(getHistory(token));
    }
  }, []);

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
              {histories.isLoading ? <SpinnerLoad />
                : histoyList(histories, allUser).map((data, index) => <HistoriesList key={index} image={data.picture || defaultPict} name={data.fullName} status={data.mutation_type.name} total={data.amount} />)}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Histories;
