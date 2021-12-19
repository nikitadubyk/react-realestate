import { YMaps, Map as MapY, Placemark } from 'react-yandex-maps';
import './Map.scss';

const Map = ({ placeOne, placeSecond }) => {
    return (
        <div>
            <YMaps>
                <MapY
                    className='map__wrapper'
                    defaultState={{
                        center: [placeOne, placeSecond],
                        zoom: 16,
                    }}
                >
                    <Placemark geometry={[placeOne, placeSecond]} />
                </MapY>
            </YMaps>
        </div>
    );
};

export default Map;
