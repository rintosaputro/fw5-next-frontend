import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import { BsArrowUp } from 'react-icons/bs';
import ChartCard from '../components/ChartCard';
import HistoriesList from '../components/HistoriesList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHistory } from '../redux/actions/histories';

const Home = () => {

  const transaction = [
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000}
  ]

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getHistory())
  }, [])

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row className=''>
          <aside className='col-lg-4'>
            <SideBar />
          </aside>
          <section className='col-lg-8'>
            <div className='card p-4 bg-primary'>
              <Row className='text-dark'>
                <Col xs={12} md={6} className='d-flex justify-content-between flex-column'>
                  <div>Balance</div>
                  <h2>Rp 120.000</h2>
                  <div>+623434215</div>
                </Col>
                <Col xs={12} md={6} className='d-flex justify-content-end'>
                  <div className='d-flex flex-column'>
                    <Link href='/transfer' className=' d-flex flex-row align-items-center my-2'>
                      <a className='text-decoration-none text-white my-2 py-3 px-5 bg-light btn'>
                        <BsArrowUp className='fs-5 me-2'/>
                        <span>Transfer</span>
                      </a>
                    </Link>
                    <Link href='/top-up' className=' d-flex flex-row align-items-center my-2'>
                      <a className='text-decoration-none text-white my-2 py-3 px-5 bg-light btn'>
                        <BsArrowUp className='fs-5 me-2'/>
                        <span>Top Up</span>
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col xs={12} lg={6} className='mt-3'>
                <div className='card bg-light py-3 h-100'>
                  <ChartCard dataChart={[10, 50, 200, 300, 250, 139, 90]} labels={['Sat','Sun','Mon','Tue', 'Wed', 'Thu', 'Fri']} income={2200000} expense={1500000} />
                </div>
              </Col>
              <Col xs={12} lg={6} className='mt-3'>
                <div className='card bg-light p-3 h-100'>
                  <h4>Transaction History</h4>
                  
                  {transaction.map((data, index) => {
                    return (index < 4 &&  <HistoriesList image={data.image} name={data.name} status={data.status} total={data.total} />)
                  })}
                </div>
              </Col>
            </Row>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Home
