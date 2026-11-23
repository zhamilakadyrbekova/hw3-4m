import ProductList from "./components/ProductList.jsx";

const products = [
    { id: 1, name: "Монстера делициоза" },
    { id: 2, name: "Фикус Бенджамина" },
    { id: 3, name: "Замиокулькас" },
    { id: 4, name: "Сансевиерия" },
    { id: 5, name: "Хлорофитум" },
    { id: 6, name: "Орхидея фаленопсис" },
];

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalEaTrYzeEXJoc2MkjLAsAoNP3SgzBGZFLKHwvasnXw&s=10",
    "https://floragrowing.com/sites/default/files/img-plants/unnamed.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Vltb3zojMphvIkIDmBxJaGV-efic5K976N_sLwYGWEQfY0ZfWojGCpE&s=10",
    "https://cdn2.botanichka.ru/wp-content/uploads/2023/04/kak-vyrastit-bolshuyu-sansevieriyu-sovety-dlya-domashnego-giganta-1.jpg",
    "https://big-pictures-tropichouse.storage.yandexcloud.net/iblock/e81/e81c32d1010b94d2c24a81a095e01203/d95ef0b7e6815a27dbf83aea5753e1e4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZzNzR0I6PMR_cS0TmHQgpMLElAgBUQWeLgbWNngb9A&s=10"
];

export default function App() {
    return (
        <div className="page">
            <header className="header">
                <h1>Зелёная лавка</h1>
                <p>Комнатные растения с доставкой по городу</p>
            </header>
            <main>
                <ProductList products={products} images={images} />
            </main>
        </div>
    );
}

