import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApartaments } from './premiumAdsSlice';
import ApartamentItem from '../apartament-item/ApartamentItem';
import Spinner from '../spinner/Spinner.js';
import './PremiumAds.scss';

const PremiumAds = () => {
    const { topAdsApartaments, apartamentLoadingStatus } = useSelector(
        state => state.premiumAdsSlice
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApartaments());
        //eslint-disable-next-line
    }, []);

    if (apartamentLoadingStatus === 'error') {
        return <h2>Упс, произошла ошибка</h2>;
    }

    const renderApartaments = arr =>
        arr.map(({ id, ...props }) => {
            return <ApartamentItem key={id} {...props} id={id} />;
        });

    return (
        <div className='premium'>
            <h3 className='premium__title'>Премиум объявления</h3>
            <div className='premium__wrapper'>
                {apartamentLoadingStatus === 'loading' ? (
                    <Spinner />
                ) : (
                    renderApartaments(topAdsApartaments)
                )}
            </div>
        </div>
    );
};

export default PremiumAds;
