import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../components/SideBar';
import { BsArrowUp } from 'react-icons/bs';
import ChartCard from '../components/ChartCard';

const Home = () => {

  const transaction = [
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Transfer', total: 50000},
    {image: '/img/review-2.jpg', name: 'Samuel Sushi', status: 'Accept', total: 50000}
  ]

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
                    return <div key={index} className='d-flex flex-row align-items-center justify-content-between'>
                      <style jsx>
                        {`.photo-trans {
                            background-image: url(${data.image});
                          }`
                        }
                      </style>
                      <div className='d-flex flex-row my-2'>
                        <div className={`${styles.phototransaction} photo-trans`}></div>
                        <div className='ps-2'>
                          <div>{data.name}</div>
                          <div>{data.status}</div>
                        </div>
                      </div>
                      <div className={`${data.status === 'Transfer' ? 'text-danger fw-bold' : 'text-primary fw-bold'}`}>
                        {data.status === 'Transfer' ? '-' : '+'}Rp{data.total}
                      </div>
                    </div>
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
