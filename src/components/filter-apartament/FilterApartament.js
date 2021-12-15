import { changeFilterByPrice } from "../city-apartament/cityApartamentSlice";
import { useDispatch } from "react-redux";
import "./FilterApartament.scss";

const FilterApartament = () => {
    const dispatch = useDispatch();

    const changeFilter = (event) => {
        const filter = event.target.value;
        dispatch(changeFilterByPrice(filter));
    };

    return (
        <div className="filter">
            <div className="filter__title">Цена:</div>
            <select className="filter__select" onChange={changeFilter}>
                <option value="default">по умолчанию</option>
                <option value="high">по возрастанию</option>
                <option value="low">по убыванию</option>
            </select>
        </div>
    );
};

export default FilterApartament;
