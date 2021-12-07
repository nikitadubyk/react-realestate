import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__title'>Недвижимость</div>
            <ul className='header__list'>
                <li>Горловка</li>
                <li>Донецк</li>
                <li>Макеевка</li>
                <li>О нас</li>
            </ul>
        </div>
    );
};

export default Header;
