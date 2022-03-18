import style from './Footer.module.scss'
const Footer = ({full}) => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        {full 
        ? <><div className={style.toptext}>
          <h2 className='my-5'>Zwallet</h2>
          <p className="">Simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
        <div className="my-5 border border-bottom" /> </>
        : <></>}
        <div className='row d-flex flex-row justify-content-between'>
          <div className='col-12 col-lg-6'>2020 Zwallet. All right reserved.</div>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 text-end'>
            <span className='me-5'>+62 5637 8882 9901</span>
            <span>contact@zwallet.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
