import { setFilter } from "components/redux/reducer";
import { useDispatch } from "react-redux";

export const Filter = () => {
    
    const dispatch = useDispatch();

    const handleChange = ({ target: {value} }) => {
        dispatch(setFilter(value));
    };
    
    return ( 
        <>
        <h4>Find contacts by name</h4>
        <input
            type="text"
            name="filter"
            onChange={handleChange}
        />
        </>
    );
}