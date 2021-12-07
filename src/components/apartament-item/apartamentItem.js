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
}) => {
    return (
        <div className={styles.premium__item}>
            <img src={img} alt={title} />
            <p className={styles.premium__price}>{price} руб</p>
            <p className={styles.premium__descr}>
                {squere} м2 | {rooms} комнаты | {bathrooms} ванны
            </p>
            <p className={styles.premium__adress}>
                {city}, {homeAdress}
            </p>
            <button className={styles.premium__button}>Подробней</button>
        </div>
    );
};

export default ApartamentItem;
