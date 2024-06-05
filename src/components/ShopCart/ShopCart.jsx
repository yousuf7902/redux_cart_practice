import { useDispatch, useSelector } from "react-redux";
import "./ShopCart.css";

import CartItem from "./CartItem";
import { toggle } from "../../features/cartSlice";

const ShopCart = () => {
    const cartItems = useSelector((state) => state.cartBtn.items);
    const length= cartItems.length;
    const isShow = useSelector((state) => state.toggle.isShow);
    const dispatch = useDispatch();

    return (
        <>
            {length && (
                <section className="cart_container">
                    <h1>Your Shopping Cart</h1>

                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={{
                                id: item.id,
                                name: item.name,
                                quantity: item.quantity,
                                price: item.price,
                                totalPrice: item.totalPrice,
                            }}
                        />
                    ))}
                </section>
            )}
        </>
    );
};

export default ShopCart;
