import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCityName } from '../city-apartament/cityApartamentSlice';
import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();

    const cityCity = city => {
        dispatch(changeCityName(city));
    };

    return (
        <div className='header'>
            <Link exact to='/' className='header__title'>
                Недвижимость
            </Link>
            <ul className='header__list'>
                <Link
                    exact
                    to='/gorlovka'
                    className='header__list-item'
                    onClick={() => cityCity('Горловка')}
                >
                    Горловка
                </Link>
                <Link
                    exact
                    to='/donetsk'
                    className='header__list-item'
                    onClick={() => cityCity('Донецк')}
                >
                    Донецк
                </Link>
                <Link
                    exact
                    to='/makeevka'
                    className='header__list-item'
                    onClick={() => cityCity('Макеевка')}
                >
                    Макеевка
                </Link>
                <Link exact to='/about-us' className='header__list-item'>
                    О нас
                </Link>
            </ul>
        </div>
    );
};

export default Header;
