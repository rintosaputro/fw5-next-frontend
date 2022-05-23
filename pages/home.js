/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import { BsArrowUp } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import SideBar from '../components/SideBar';
import ChartCard from '../components/ChartCard';
import HistoriesList from '../components/HistoriesList';
import { getHistory } from '../redux/actions/histories';
import { getBalance, getAllUser } from '../redux/actions/profile';
import nominalFormat from '../helper/nominalFormat';
import histoyList from '../helper/historyList';
import ModalTopUp from '../components/ModalTopUp';
import SpinnerLoad from '../components/SpinnerLoad';

function Home() {
  const dispatch = useDispatch();
  const route = useRouter();
  const {
    phoneList, balance, histories: historyData, allUser,
  } = useSelector((state) => state);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    dispatch(getBalance(token));
    dispatch(getHistory(token));
    dispatch(getAllUser(token));
  }, [dispatch]);

  const toHistories = (e) => {
    e.preventDefault();
    route.push('/histories');
  };

  const transactionHistories = histoyList(historyData, allUser).reverse();
  const test = (e) => {
    e.preventDefault();
    console.log(transactionHistories[0]);
  };
  const defaultPict = '/img/defaultPict.png';

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row className="">
          <aside className="col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-lg-8">
            <div className="card p-4 bg-primary">
              <Row className="text-dark">
                <Col xs={12} md={6} className="d-flex justify-content-between flex-column">
                  <div onClick={test} aria-hidden="true">Balance</div>
                  <h2>
                    Rp
                    {nominalFormat(balance.results)}
                  </h2>
                  <div>{phoneList.phone}</div>
                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-end">
                  <div className="d-flex flex-column">
                    <Link href="/transfer" className=" d-flex flex-row align-items-center my-2">
                      <a className="text-decoration-none text-white my-2 py-3 px-5 bg-light btn">
                        <BsArrowUp className="fs-5 me-2" />
                        <span>Transfer</span>
                      </a>
                    </Link>
                    {/* <button data-bs-toggle="modal" data-bs-target='modalSide' className=' d-flex flex-row align-items-center my-2 text-white my-2 py-3 px-5 bg-light btn'>
                      <BsArrowUp className='fs-5 me-2'/>
                      <span>Top Up</span>
                    </button> */}
                    <ModalTopUp />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={12} lg={6} className="mt-3">
                <div className="card bg-light py-3 h-100">
                  <ChartCard dataChart={[10, 50, 200, 300, 250, 139, 90]} labels={['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']} income={2200000} expense={1500000} />
                </div>
              </Col>
              <Col xs={12} lg={6} className="mt-3">
                <div onClick={toHistories} className={`${styles.histories} card bg-light p-3 h-100`} aria-hidden="true">
                  <div className="d-flex flex-row justify-content-between">
                    <h5>Transaction History</h5>
                    <Link href="/histories">
                      <a className="text-decoration-none">See all</a>
                    </Link>
                  </div>
                  {historyData.isLoading ? <SpinnerLoad />
                    : histoyList(historyData, allUser).map((data, index) => (index < 4 && <HistoriesList key={index} image={data.picture || defaultPict} name={data.fullName} status={data.mutation_type.name} total={data.amount} />))}
                </div>
              </Col>
            </Row>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Home;
