import { useDispatch } from "react-redux";
import "./Products.css";
import { addItemToCart } from "../../features/cartBtnSlice";

const Products =(props) => {
    const {name, price, description,id}= props;
    const dispatch =useDispatch();

    const addToCartHandler =()=>{
        dispatch(addItemToCart({
            id,
            price,
            name
        }))
    }

    return (
        <li className="cart_list">
            <div className="cart_list_header">
                <h2>{name}</h2>
                <div>
                    <h3>${price}</h3>
                </div>
            </div>
            <div className="cart_list_body">
                <div>
                    <p>{description}</p>
                </div>
                <div className="product_btn">
                    <button onClick={addToCartHandler}>Add to cart</button>
                </div>
            </div>
        </li>
    );

}

export default Products;