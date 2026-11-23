import { useState } from "react";

export default function ProductCard({ product, images }) {
    const [image] = useState(
        () => images[Math.floor(Math.random() * images.length)]
    );

    const handleBuy = () => {
        console.log(`id: ${product.id}, название: ${product.name}`);
    };

    return (
        <article className="card">
            <img className="card__img" src={image} alt={product.name} />
            <div className="card__body">
                <h2 className="card__title">{product.name}</h2>
                <button className="card__btn" onClick={handleBuy}>
                    Buy now
                </button>
            </div>
        </article>
    );
}
