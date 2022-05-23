/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { BsGrid, BsArrowUp } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Transfer.module.css';
import { topUp } from '../redux/actions/transaction';

function SideBar({ cls, idModal = 'modalSide' }) {
  const route = useRouter();
  const [routes, setRoutes] = useState('/home');
  const [data, setData] = useState(true);
  const [success, setSuccess] = useState(false);
  const [topupSuccess, setTopupSuccess] = useState(false);

  const { topUp: topUpData } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    setRoutes(route.pathname);
  }, [route.pathname]);
  useEffect(() => {
    if (topUpData.isSuccess) {
      setTopupSuccess(true);
    }
  }, [topUpData.isSuccess]);

  const dataSide = [
    { icon: BsGrid, desc: 'Dashboard', to: '/home' },
    { icon: BsArrowUp, desc: 'Transfer', to: '/transfer' },
    { icon: AiOutlinePlus, desc: 'Top Up', to: '/top-up' },
    { icon: RiUser3Line, desc: 'Profile', to: '/profile' },
  ];

  const handleTopup = (e) => {
    e.preventDefault();
    const nominal = document.getElementById(`${idModal}Input`).value;
    const token = window.localStorage.getItem('token');
    if (topupSuccess) {
      setTopupSuccess(false);
    }
    if (nominal) {
      setData(true);
      setSuccess(true);
      dispatch(topUp(token, nominal));
    } else {
      setData(false);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
    });
    route.push('/login');
  };

  const topUpLink = (e) => {
    e.preventDefault();
    setTopupSuccess(false);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setTopupSuccess(false);
    dispatch({ type: 'TOPUP_CLEAR' });
    if (route.pathname !== '/top-up') {
      route.push('/top-up');
    }
  };

  return (
    <div className={`${cls} card p-4 bg-light position-relative h-100 ${styles.asideCont}`}>
      {dataSide.map((data, index) => (
        <Link href={data.to} key={data.desc} className=" d-flex flex-row align-items-center my-3">
          {route.pathname === '/histories'
            ? (
              <a id={data.desc} className={`${index === 0 ? 'active-side text-primary' : 'text-white'} side-side text-decoration-none my-4 ps-2 d-flex flex-row align-items-center`}>
                <data.icon className="fs-5 me-2" />
                <span>{data.desc}</span>
              </a>
            )
            : (
              <a
                id={data.desc}
                data-bs-toggle={data.to === '/top-up' ? 'modal' : ''}
                data-bs-target={data.to === '/top-up' ? `#${idModal}` : ''}
                className={`${routes[1] === data.to[1] && routes[2] === data.to[2] ? 'active-side text-primary' : 'text-white'} side-side text-decoration-none my-4 ps-2 d-flex flex-row align-items-center`}
              >
                <data.icon className="fs-5 me-2" />
                <span>{data.desc}</span>
              </a>
            )}
        </Link>
      ))}
      <Link href="/login" className=" d-flex flex-row align-items-center my-3">
        <a onClick={handleLogout} className="text-decoration-none text-white my-4 ps-3 position-absolute bottom-0">
          <MdOutlineLogout className="fs-5 me-2" />
          <span>Logout</span>
        </a>
      </Link>
      <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-primary text-dark">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id={`${idModal}Label`}>Topup</h5>
              <button onClick={(e) => route.push('/top-up')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <p className="ps-3">Enter the amount of money, and click submit</p>
            <div className="modal-body">
              <form>
                <input id={`${idModal}Input`} className={`form-control text-center ${styles.inputModal}`} type="number" placeholder="___________" />
                {!data && <div className="text-danger">Data must be filled</div>}
              </form>
            </div>
            <div className="modal-footer border-top-0">
              {topupSuccess
                ? (
                  <div>
                    <div>Successfully Top Up!</div>
                    <button onClick={handleClose} type="button" className="btn btn-light w-100" data-bs-dismiss="modal">Close</button>
                  </div>
                )
                : (topUpData.isLoading
                  ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )
                  : <button onClick={handleTopup} type="button" className="btn btn-light">Submit</button>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
