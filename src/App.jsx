import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ProductsItem from "./components/ProductList/ProductsItem.jsx";
import ShopCart from "./components/ShopCart/ShopCart.jsx";
import { toggle } from "./features/cartSlice.jsx";

function App() {
    const isShow = useSelector((state) => state.toggle.isShow);
    return (
        <>
            <NavBar />
            {isShow && <ShopCart />}
            <ProductsItem />
        </>
    );
}

export default App;
