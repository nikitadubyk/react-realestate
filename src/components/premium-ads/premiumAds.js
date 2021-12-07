import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    apartamentsFetching,
    apartamentsFetched,
    apartamentsFetchingError,
} from './premiumAdsSlice';
import axios from 'axios';
import ApartamentItem from '../apartament-item/ApartamentItem';
import Spinner from '../spinner/Spinner.js';
import './PremiumAds.scss';

const PremiumAds = () => {
    const { apartaments, apartamentLoadingStatus } = useSelector(
        state => state.premiumAdsSlice
    );
    const dispatch = useDispatch();

    function fetchData() {
        dispatch(apartamentsFetching());
        axios
            .get('http://localhost:3001/top-ads')
            .then(res => dispatch(apartamentsFetched(res.data)))
            .catch(e => dispatch(apartamentsFetchingError()));
    }

    useEffect(() => {
        fetchData();
        //eslint-disable-next-line
    }, []);

    if (apartamentLoadingStatus === 'error') {
        return <h2>Упс, произошла ошибка</h2>;
    }

    const renderApartaments = arr =>
        arr.map(({ id, ...props }) => {
            return <ApartamentItem key={id} {...props} />;
        });

    return (
        <div className='premium'>
            <h3 className='premium__title'>Премиум объявления</h3>
            <div className='premium__wrapper'>
                {apartamentLoadingStatus === 'loading' ? (
                    <Spinner />
                ) : (
                    renderApartaments(apartaments)
                )}
            </div>
        </div>
    );
};

export default PremiumAds;
