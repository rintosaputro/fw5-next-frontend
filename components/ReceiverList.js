/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styles from './styles/ReceiverList.module.css';

function ReceiverList({
  event, image, name, phone,
}) {
  return (
    <div style={{ cursor: 'pointer' }} onClick={event} className={`${styles.card} d-flex flex-row align-items-center justify-content-between`}>
      <div className="d-flex flex-row my-3 p-3 text-decoration-none text-white">
        <style jsx>
          {`.photo {
              background-image: url(${image});
            }`}
        </style>
        <div className={`${styles.photoUser} photo`} />
        <div className="ps-3">
          <h6>{name}</h6>
          <div>{phone}</div>
        </div>
      </div>
    </div>
  );
}

export default ReceiverList;
