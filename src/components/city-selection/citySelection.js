import CityItem from '../city-item/cityItem';
import './citySelection.scss';

const CitySelection = () => {
    return (
        <div>
            <h1 className='city__title'>
                Недвижимость по самым привликательным ценам
            </h1>
            <h2 className='city__subtitle'>
                Лучшая недвижимость по самым выгодным ценам на расстоянии одного
                клика!
            </h2>
            <div className='city__wrapper'>
                <CityItem city='Горловка' img='/img/city/gorlovka.jpg' />
                <CityItem city='Донецк' img='/img/city/donetsk.jpg' />
                <CityItem city='Макеевка' img='/img/city/makeevka.jpg' />
            </div>
        </div>
    );
};

export default CitySelection;
