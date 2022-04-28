/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import { Row } from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SideBar from '../../components/SideBar';
import styles from '../../styles/Transfer.module.css';
import ReceiverList from '../../components/ReceiverList';

function Transfer() {
  const route = useRouter();

  const { users } = useSelector((state) => state);

  const handleSearch = (e) => {
    e.preventDefault();
    const key = document.getElementById('search').value;
    const filt = users.results.filter((data) => data.name === key);
  };

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4 d-none d-lg-block">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card bg-light p-4">
              <h4>Search Receiver</h4>
              <form className="d-flex flex-row mb-5">
                <button className={`${styles.searchBtn} px-3 btn-secondary`} type="button"><BiSearchAlt2 className="fs-3" /></button>
                <input id="search" className={`${styles.input} form-control bg-secondary`} type="text" placeholder="Search receive here" />
              </form>
              {users.results.map((data, index) => {
                let phone;
                if (data.phone.length > 0) {
                  data.phone.forEach((item) => {
                    if (item.isPrimary === 1) {
                      phone = item.number;
                    }
                  });
                }
                return (index < 6 && <ReceiverList key={index} event={(e) => route.push(`/transfer/${data.id}`)} image={data.picture || '/img/defaultPict.png'} name={data.fullName} phone={phone || 'phone not available'} />);
              })}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  );
}

export default Transfer;
