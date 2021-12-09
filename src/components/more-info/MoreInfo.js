import './MoreInfo.scss';
import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard]);

const MoreInfo = () => {
    return (
        <div className='info'>
            <h5 className='info__title'>3-х комнатная квартира в центре</h5>
            <h5 className='info__subtitle'>100 м2 | 3 комнаты | 2 ванны</h5>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                loop={true}
                centeredSlides={true}
                spaceBetween={20}
            >
                <SwiperSlide>
                    <img
                        src='https://polyakova.biz/content/portfolio/296/previewhead-296.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://polyakova.biz/content/portfolio/296/polyakova-s3-liv-01-03_5169.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://polyakova.biz/content/portfolio/296/polyakova-s3-liv-02-03_5170.jpg'
                        alt=''
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='https://polyakova.biz/content/portfolio/296/polyakova-s3-liv-03-02_5171.jpg'
                        alt=''
                    />
                </SwiperSlide>
            </Swiper>
            <div className='info__wrapper'>
                <div className='info__address'>Горловка, Победы 72</div>
                <div className='info__price'>500 000 руб</div>
            </div>
            <p className='info__descr'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                iaculis nisi id scelerisque sollicitudin. Maecenas congue
                sodales justo, id facilisis mauris imperdiet ut. Donec accumsan
                facilisis enim, nec molestie turpis rhoncus a. Vivamus a felis
                in enim tempor congue id id nunc. Nulla in lacus blandit,
                scelerisque nunc nec, porttitor velit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Nunc in faucibus lorem. Integer elit nulla,
                consectetur sit amet dui ut, sodales rutrum nisl. Ut a erat eget
                justo placerat lacinia. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Pellentesque dapibus risus et
                malesuada accumsan. Quisque elit nunc, egestas vel pharetra
                eget, dictum a nibh. Donec id risus tortor. Morbi vestibulum in
                mi eget pharetra. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Quisque mattis
                eleifend venenatis. Cras vehicula bibendum pretium. Phasellus ac
                nisl elit. Phasellus a viverra mi. Nulla facilisis elit ultrices
                varius placerat. Morbi imperdiet massa dictum orci facilisis
                fringilla. Vestibulum cursus sem quis turpis suscipit mollis.
                Nullam sed sem eget arcu auctor viverra ac sit amet ante.
            </p>
        </div>
    );
};

export default MoreInfo;
