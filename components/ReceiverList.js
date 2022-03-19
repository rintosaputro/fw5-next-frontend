import Link from "next/link";
import styles from './styles/ReceiverList.module.css';

const ReceiverList = ({route, image, name, phone}) => {
  return (
    <Link href={`/transfer/${route}`} className='d-flex flex-row align-items-center justify-content-between'>         
      <a className={`${styles.card} d-flex flex-row my-3 p-3 text-decoration-none text-white`}>
        <style jsx>
          {`.photo {
              background-image: url(${image});
            }`
          }
        </style>
        <div className={`${styles.photoUser} photo`}></div>
        <div className='ps-3'>
          <h6>{name}</h6>
          <div>{phone}</div>
        </div>
      </a>
    </Link>
  )
}

export default ReceiverList;
