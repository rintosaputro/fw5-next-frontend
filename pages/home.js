import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { Row } from 'react-bootstrap';
import SideBar from '../components/SideBar';

const Home = () => {
  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row className=''>
          <SideBar />
          {/* <aside className='col-lg-4'>
            <div className='card p-4 bg-light position-relative'>
              {dataSide.map((data, index) => {
                return <Link href={data.to} key={data.desc} className=' d-flex flex-row align-items-center my-3'>
                  <a className={`${routes === data.to && 'active-side'} side-side text-decoration-none text-white my-4 ps-2`}>
                    <data.icon className='fs-5 me-2'/>
                    <span>{data.desc}</span>
                  </a>
                </Link>
              })}
              <Link href='/login' className=' d-flex flex-row align-items-center my-3 position-absolute'>
                <a className='text-decoration-none text-white my-4 ps-3'>
                  <MdOutlineLogout className='fs-5 me-2'/>
                  <span>Logout</span>
                </a>
              </Link>
            </div>
          </aside> */}
        </Row>
      </main>
    </Layout>
  )
}

export default Home
