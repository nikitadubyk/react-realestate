import { Link } from 'react-router-dom';
import styles from './ApartamentItem.module.scss';

const ApartamentItem = ({
    id,
    img,
    price,
    rooms,
    bathrooms,
    squere,
    city,
    homeAdress,
    title,
    topAds,
}) => {
    return (
        <div className={styles.premium__item}>
            <img src={img} alt={title} className={styles.premium__img} />
            <p className={styles.premium__price}>{price} руб</p>
            <p className={styles.premium__descr}>
                {squere} м2 | {rooms} комнаты | {bathrooms} ванны
            </p>
            <p className={styles.premium__adress}>
                {city}, {homeAdress}
            </p>
            <div className={styles.premium__wrapper}>
                <Link
                    to={`/apartament/${id}`}
                    className={styles.premium__button}
                >
                    Подробней
                </Link>
                {topAds && (
                    <img
                        src='/img/star_icon.svg'
                        alt='star'
                        className={styles.premium__ads}
                    />
                )}
            </div>
        </div>
    );
};

export default ApartamentItem;
