import Header from '../../components/header/Header';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './AboutUsPage.scss';

const AboutUsPage = () => {
    return (
        <>
            <Header />
            <div className='about-us'>
                <h2 className='about-us__title'>Наша компания</h2>
                <img
                    src='/img/about-us.jpg'
                    alt='About us'
                    className='about-us__img'
                />
                <p className='about-us__descr'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    modi natus obcaecati consequatur temporibus, tenetur facilis
                    aspernatur earum suscipit dolor cum sint voluptatibus,
                    accusantium autem. Itaque tempora temporibus quia
                    numquam.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In modi natus obcaecati consequatur temporibus,
                    tenetur facilis aspernatur earum suscipit dolor cum sint
                    voluptatibus, accusantium autem. Itaque tempora temporibus
                    quia numquam.Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. In modi natus obcaecati consequatur
                    temporibus, tenetur facilis aspernatur earum suscipit dolor
                    cum sint voluptatibus, accusantium autem. Itaque tempora
                    temporibus quia numquam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    modi natus obcaecati consequatur temporibus, tenetur facilis
                    aspernatur earum suscipit dolor cum sint voluptatibus,
                    accusantium autem. Itaque tempora temporibus quia
                    numquam.Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. In modi natus obcaecati consequatur temporibus,
                    tenetur facilis aspernatur earum suscipit dolor cum sint
                    voluptatibus, accusantium autem. Itaque tempora temporibus
                    quia numquam.Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. In modi natus obcaecati consequatur
                    temporibus, tenetur facilis aspernatur earum suscipit dolor
                    cum sint voluptatibus, accusantium autem. Itaque tempora
                    temporibus quia numquam.
                </p>
                <div>
                    <YMaps>
                        <Map
                            className='about-us__map'
                            defaultState={{
                                center: [48.309573, 38.0025],
                                zoom: 16,
                            }}
                        >
                            <Placemark geometry={[48.309573, 38.0025]} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
