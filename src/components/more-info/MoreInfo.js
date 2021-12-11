import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './MoreInfo.scss';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

SwiperCore.use([Navigation, Pagination, Keyboard]);

const MoreInfo = () => {
    const { id } = useParams();
    const apartaments = useSelector(state => state.premiumAdsSlice.apartaments);
    const correctHouse = apartaments.filter(item => item.id === +id);

    const renderInfo = arr => {
        const {
            title,
            price,
            squere,
            rooms,
            bathrooms,
            city,
            homeAdress,
            images,
            placeOnMap1,
            placeOnMap2,
        } = arr[0];
        return (
            <div className='info'>
                <h5 className='info__title'>{title}</h5>
                <h5 className='info__subtitle'>
                    {squere} м2 | {rooms} комнаты | {bathrooms} ванны
                </h5>
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={20}
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={img} alt={title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='info__wrapper'>
                    <div className='info__address'>
                        {city}, {homeAdress}
                    </div>
                    <div className='info__price'>{price} руб</div>
                </div>
                <p className='info__descr'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus iaculis nisi id scelerisque sollicitudin. Maecenas
                    congue sodales justo, id facilisis mauris imperdiet ut.
                    Donec accumsan facilisis enim, nec molestie turpis rhoncus
                    a. Vivamus a felis in enim tempor congue id id nunc. Nulla
                    in lacus blandit, scelerisque nunc nec, porttitor velit.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nunc in faucibus lorem.
                    Integer elit nulla, consectetur sit amet dui ut, sodales
                    rutrum nisl. Ut a erat eget justo placerat lacinia. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus.
                    Pellentesque dapibus risus et malesuada accumsan. Quisque
                    elit nunc, egestas vel pharetra eget, dictum a nibh. Donec
                    id risus tortor. Morbi vestibulum in mi eget pharetra.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Quisque mattis eleifend
                    venenatis. Cras vehicula bibendum pretium. Phasellus ac nisl
                    elit. Phasellus a viverra mi. Nulla facilisis elit ultrices
                    varius placerat. Morbi imperdiet massa dictum orci facilisis
                    fringilla. Vestibulum cursus sem quis turpis suscipit
                    mollis. Nullam sed sem eget arcu auctor viverra ac sit amet
                    ante.
                </p>
                <div>
                    <YMaps>
                        <Map
                            className='map__wrapper'
                            defaultState={{
                                center: [placeOnMap1, placeOnMap2],
                                zoom: 16,
                            }}
                        >
                            <Placemark geometry={[placeOnMap1, placeOnMap2]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        );
    };

    return <>{renderInfo(correctHouse)}</>;
};

export default MoreInfo;
