import { useState, useEffect } from 'react';
import axios from 'axios';
import ApartamentItem from '../apartament-item/apartamentItem';
import './premiumAds.scss';

const PremiumAds = () => {
    const [data, setData] = useState([]);
    function fetchData() {
        axios
            .get('http://localhost:3001/top-ads')
            .then(res => setData(res.data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='premium'>
            <h3 className='premium__title'>Премиум объявления</h3>
            <div className='premium__wrapper'>
                {data.map(({ id, ...props }) => {
                    return <ApartamentItem key={id} {...props} />;
                })}
            </div>
        </div>
    );
};

export default PremiumAds;
