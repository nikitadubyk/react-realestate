import axios from 'axios';
import { useEffect } from 'react';
import {
    apartamentsFetched,
    apartamentsFetching,
    apartamentsFetchingError,
} from '../premium-ads/premiumAdsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import ApartamentItem from '../apartament-item/ApartamentItem';
import Spinner from '../spinner/Spinner';

const CityApartament = () => {
    const cityName = useSelector(state => state.cityApartamentSlice.cityName);
    const { apartamentLoadingStatus } = useSelector(
        state => state.premiumAdsSlice
    );
    const dispatch = useDispatch();

    function fetchData() {
        dispatch(apartamentsFetching());
        axios
            .get('http://localhost:3001/apartaments')
            .then(res => dispatch(apartamentsFetched(res.data)))
            .catch(e => dispatch(apartamentsFetchingError()));
    }

    useEffect(() => {
        fetchData();
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

    if (apartamentLoadingStatus === 'error') {
        return <h2>Упс, произошла ошибка</h2>;
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{cityName}</h2>
            <div className='premium__wrapper'>
                {apartamentLoadingStatus === 'loading' ? (
                    <Spinner />
                ) : (
                    filteredApartaments.map(({ id, ...props }) => (
                        <ApartamentItem key={id} {...props} />
                    ))
                )}
            </div>
        </div>
    );
};

export default CityApartament;
