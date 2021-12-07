import './CityItem.scss';

const CityItem = ({ city, img }) => {
    return (
        <div
            className='city__item'
            style={{ backgroundImage: `url('${img}')` }}
            tabIndex='0'
        >
            <p>{city}</p>
        </div>
    );
};

export default CityItem;
