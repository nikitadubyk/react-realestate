import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link exact to='/' className='header__title'>
                Недвижимость
            </Link>
            <ul className='header__list'>
                <Link exact to='/gorlovka' className='header__list-item'>
                    Горловка
                </Link>
                <Link exact to='/donetsk' className='header__list-item'>
                    Донецк
                </Link>
                <Link exact to='/makeevka' className='header__list-item'>
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
