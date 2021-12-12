import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCityName } from '../city-apartament/cityApartamentSlice';
import CityItem from '../city-item/CityItem';
import './CitySelection.scss';

const CitySelection = () => {
    const dispatch = useDispatch();

    const cityCity = city => {
        dispatch(changeCityName(city));
    };

    return (
        <div className='city'>
            <h1 className='city__title'>
                Недвижимость по самым привликательным ценам
            </h1>
            <h2 className='city__subtitle'>
                Лучшая недвижимость по самым выгодным ценам на расстоянии одного
                клика!
            </h2>
            <div className='city__wrapper'>
                <Link
                    to='/gorlovka'
                    exact
                    onClick={() => cityCity('Горловка')}
                    style={{ textDecoration: 'none' }}
                >
                    <CityItem city='Горловка' img='/img/city/gorlovka.jpg' />
                </Link>
                <Link
                    to='/donetsk'
                    exact
                    onClick={() => cityCity('Донецк')}
                    style={{ textDecoration: 'none' }}
                >
                    <CityItem city='Донецк' img='/img/city/donetsk.jpg' />
                </Link>
                <Link
                    to='/makeevka'
                    exact
                    onClick={() => cityCity('Макеевка')}
                    style={{ textDecoration: 'none' }}
                >
                    <CityItem city='Макеевка' img='/img/city/makeevka.jpg' />
                </Link>
            </div>
        </div>
    );
};

export default CitySelection;
