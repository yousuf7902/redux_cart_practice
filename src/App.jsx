import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductsItem from "./components/ProductList/ProductsItem.jsx";
import ShopCart from "./components/ShopCart/ShopCart.jsx";
import { toggle } from "./features/cartSlice.jsx";
import { useEffect } from "react";

function App() {
    const isShow = useSelector((state) => state.toggle.isShow);
    const cartItems = useSelector((state) => state.cartBtn.items);
    const length = cartItems.length;
    const dispatch= useDispatch();

    useEffect(() => {
        if (length === 0) {
            dispatch(toggle());
        }
    }, [length, dispatch]);

    return (
        <>
            <NavBar />
            {isShow && <ShopCart />}
            <ProductsItem />
        </>
    );
}

export default App;
