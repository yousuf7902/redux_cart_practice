import { useDispatch } from "react-redux";
import { addItemToCart, removeItemToCart } from "../../features/cartBtnSlice";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const {name, quantity, price, totalPrice, id} =props.item;

    const removeItem = () => {
        dispatch(removeItemToCart(id));
    };

    const addItem = () => {
        dispatch(addItemToCart({
            id,
            name,
            price
        }));
    };

    return (
        <li className="cart_list">
            <div className="cart_list_header">
                <h2>{name}</h2>
                <div>
                    <h3>
                        $ {totalPrice} <span>(${price}/item)</span>
                    </h3>
                </div>
            </div>
            <div className="cart_list_body">
                <div>
                    x<span>{quantity}</span>
                </div>
                <div className="cart_btn">
                    <button onClick={removeItem}>-</button>
                    <button onClick={addItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
