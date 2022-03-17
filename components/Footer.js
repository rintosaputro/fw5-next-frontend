import style from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.toptext}>
          <h2>Zwallet</h2>
          <p className="">Simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
        <div className="my-5 border border-bottom" />
        <div className='d-flex flex-row justify-content-between'>
          <div>2020 Zwallet. All right reserved.</div>
          <div>
            <span className='me-5'>+62 5637 8882 9901</span>
            <span>contact@zwallet.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
