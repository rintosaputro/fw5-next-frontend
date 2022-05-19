import { BsGrid, BsArrowUp } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import styles from '../styles/Transfer.module.css';
import { topUp } from '../redux/actions/transaction';
import { useDispatch, useSelector } from 'react-redux';
// import { BsArrowUp } from 'react-icons/bs';

const ModalTopUp = () => {
  const route = useRouter();
  const [data, setData] = useState(true);
  const [success, setSuccess] = useState(false);
  const [topupSuccess, setTopupSuccess] = useState(false)

  const { topUp: topUpData } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (topUpData.isSuccess) {
      setTopupSuccess(true)
    }
  }, [topUpData.isSuccess])

  const handleTopup = (e) => {
    e.preventDefault();
    const nominal = document.getElementById(`modalTopUpInput`).value;
    const token = window.localStorage.getItem('token');
    if (topupSuccess) {
      setTopupSuccess(false)
    }
    if (nominal) {
      setData(true);
      setSuccess(true);
      dispatch(topUp(token, nominal))
    } else {
      setData(false);
    }
    console.log(nominal)
  }

  const topUpLink = (e) => {
    e.preventDefault();
    setTopupSuccess(false);
  }
  const handleClose = (e) => {
    e.preventDefault();
    setTopupSuccess(false);
    if (route.pathname !== '/top-up') {
      route.push('/top-up')
    }
  }

  return (
    <>
    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button> */}
    {/* <button type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" className=' d-flex flex-row align-items-center my-2 text-white my-2 py-3 px-5 bg-light btn'>
      <BsArrowUp className='fs-5 me-2'/>
      <span>Top Up</span>
    </button> */}
    <button type="button" className="d-flex flex-row align-items-center my-2 text-white my-2 py-3 px-5 bg-light btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <BsArrowUp className='fs-5 me-2'/>
      <span>Top Up</span>
    </button>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`modalTopUpLabel`}>Topup</h5>
            <button onClick={e => route.push('/top-up')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <p className="ps-3">Enter the amount of money, and click submit</p>
          <div className="modal-body">
            <form>
              <input id={`modalTopUpInput`} className={`form-control text-center ${styles.inputModal}`} type='number' placeholder="___________" />
              {!data && <div className='text-danger'>Data must be filled</div>}
            </form>
          </div>
          <div className="modal-footer border-top-0">
            {topupSuccess
            ? <div>
                <div>Successfully Top Up!</div>
                <button onClick={handleClose} type="button" className="btn btn-light w-100" data-bs-dismiss='modal'>Close</button>
              </div>
            : (topUpData.isLoading 
              ? <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              : <button onClick={handleTopup} type="button" className="btn btn-light">Submit</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ModalTopUp;
