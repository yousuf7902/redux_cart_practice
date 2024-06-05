import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import { toggle } from "../../features/cartSlice";

const NavBar = () => {

    const dispatch = useDispatch();

    const totalQuantity = useSelector((state) => state.cartBtn.totalQuantity);

    const toggleHandler = () =>{
        dispatch(toggle());
    }

    return (
        <nav className="nav_bar"> 
            <div className="nav_heading">
                <h1>ReduxCart</h1>
            </div>
            <div className="nav_btn">
                <button onClick={toggleHandler}>
                    <span>My Cart</span>
                    <span className="nav_quantity">{totalQuantity}</span>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
