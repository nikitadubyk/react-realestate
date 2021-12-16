import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./MoreInfo.scss";

import { YMaps, Map, Placemark } from "react-yandex-maps";

SwiperCore.use([Navigation, Pagination, Keyboard]);

const MoreInfo = () => {
    const { id } = useParams();
    const apartaments = useSelector(
        (state) => state.premiumAdsSlice.apartaments
    );
    const correctHouse = apartaments.filter((item) => item.id === +id);

    const renderInfo = (arr) => {
        const {
            title,
            description,
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
            <div className="info">
                <h5 className="info__title">{title}</h5>
                <h5 className="info__subtitle">
                    {squere} кв.м | {rooms} комнаты | {bathrooms}{" "}
                    {bathrooms === 1 ? "ванная" : "ванны"}
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
                <div className="info__wrapper">
                    <div className="info__address">
                        {city}, {homeAdress}
                    </div>
                    <div className="info__price">{price} руб</div>
                </div>
                <p className="info__descr">{description}</p>
                <div>
                    <YMaps>
                        <Map
                            className="map__wrapper"
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
