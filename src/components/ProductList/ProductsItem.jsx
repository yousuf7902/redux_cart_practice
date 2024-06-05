import Products from "./Products";
import "./ProductsItem.css";

const dummy_products = [
    {
        id: "p1",
        title: "My First Book",
        price: 100,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
        id: "p2",
        title: "My Second Book",
        price: 50,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing",
    },
    {
        id: "p3",
        title: "My Third Book",
        price: 80,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
];


const ProductsItem = () =>{

    return (
        <section className="product_container">
            <h1> Buy Your Favourite Products</h1>
            <div>
                <ul>
                    {dummy_products.map((product) => (
                        <Products 
                        key={product.id}
                        id={product.id}
                        name={product.title}
                        price={product.price}
                        description={product.description}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ProductsItem;