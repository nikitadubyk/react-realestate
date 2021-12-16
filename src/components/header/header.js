import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeCityName } from "../city-apartament/cityApartamentSlice";
import "./Header.scss";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const cityCity = (city) => {
        dispatch(changeCityName(city));
    };

    const changeActive = () => {
        setIsActive(!isActive);
        console.log(isActive);
    };

    return (
        <div className="header">
            <Link exact to="/" className="header__title">
                Недвижимость
            </Link>
            <div
                className={`burger ${isActive ? "burger_active" : null}`}
                onClick={changeActive}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul
                className={`header__list ${
                    isActive ? "header__list_active" : null
                }`}
            >
                <Link
                    exact
                    to="/gorlovka"
                    className="header__list-item"
                    onClick={() => cityCity("Горловка")}
                >
                    Горловка
                </Link>
                <Link
                    exact
                    to="/donetsk"
                    className="header__list-item"
                    onClick={() => cityCity("Донецк")}
                >
                    Донецк
                </Link>
                <Link
                    exact
                    to="/makeevka"
                    className="header__list-item"
                    onClick={() => cityCity("Макеевка")}
                >
                    Макеевка
                </Link>
                <Link exact to="/about-us" className="header__list-item">
                    О нас
                </Link>
            </ul>
        </div>
    );
};

export default Header;
