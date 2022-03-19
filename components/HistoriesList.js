import styles from '../styles/Home.module.css';

const HistoriesList = ({image, name, status, total}) => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between'>
      <style jsx>
        {`.photo-trans {
            background-image: url(${image});
          }`
        }
      </style>
      <div className='d-flex flex-row my-2'>
        <div className={`${styles.phototransaction} photo-trans`}></div>
        <div className='ps-2'>
          <div>{name}</div>
          <div>{status}</div>
        </div>
      </div>
      <div className={`${status === 'Transfer' ? 'text-danger fw-bold' : 'text-primary fw-bold'}`}>
        {status === 'Transfer' ? '-' : '+'}Rp{total}
      </div>
    </div>
  )
}

export default HistoriesList;
