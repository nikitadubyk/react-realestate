import { useEffect } from 'react';
import { fetchApartaments } from '../premium-ads/premiumAdsSlice';
import { changeFilterByPrice } from '../city-apartament/cityApartamentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import ApartamentItem from '../apartament-item/ApartamentItem';
import Spinner from '../spinner/Spinner';
import FilterApartament from '../filter-apartament/FilterApartament';

const CityApartament = () => {
    const { cityName, filterByPrice } = useSelector(
        state => state.cityApartamentSlice
    );
    const { apartamentLoadingStatus } = useSelector(
        state => state.premiumAdsSlice
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApartaments());
        return function cleanFilter() {
            dispatch(changeFilterByPrice('default'));
        };
        //eslint-disable-next-line
    }, []);

    const filteredApartamentsSelector = createSelector(
        state => state.cityApartamentSlice.cityName,
        state => state.premiumAdsSlice.apartaments,
        (cityName, apartaments) => {
            return apartaments.filter(item => item.city === cityName);
        }
    );

    const filteredApartaments = useSelector(filteredApartamentsSelector);

    switch (filterByPrice) {
        case 'high':
            filteredApartaments.sort((a, b) => a.price - b.price);
            break;
        case 'low':
            filteredApartaments.sort((a, b) => b.price - a.price);
            break;
        default:
            break;
    }

    if (apartamentLoadingStatus === 'error') {
        return <h2>Упс, произошла ошибка</h2>;
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{cityName}</h2>
            <FilterApartament />
            <div className='premium__wrapper'>
                {apartamentLoadingStatus === 'loading' ? (
                    <Spinner />
                ) : (
                    filteredApartaments.map(({ id, ...props }) => (
                        <ApartamentItem key={id} {...props} id={id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CityApartament;
