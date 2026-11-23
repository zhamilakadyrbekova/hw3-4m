import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products, images }) {
    return (
        <ul className="grid">
            {products.map((product) => (
                <li key={product.id}>
                    <ProductCard product={product} images={images} />
                </li>
            ))}
        </ul>
    );
}
