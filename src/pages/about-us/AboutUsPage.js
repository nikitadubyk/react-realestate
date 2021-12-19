import Header from '../../components/header/Header';
import Map from '../../components/map/Map';
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
                <div className='about-us__map'>
                    <Map placeOne={48.309573} placeSecond={38.0025} />
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
