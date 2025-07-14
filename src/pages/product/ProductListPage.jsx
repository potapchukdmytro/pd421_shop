import { useState, useEffect } from "react";
import { Typography, Grid, Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";
import ProductCard from "../../components/cards/ProductCard";

const data = [
    {
        id: 1,
        name: "Пральна машина вузька Indesit IM 602B MY TIME UA",
        description: "Вузька пральна машина з фронтальним завантаженням",
        image: "https://content1.rozetka.com.ua/goods/images/big/479401292.jpg",
        price: 11999
    },
    {
        id: 2,
        name: "Пральна машина LG F2J3NS0W",
        description: "Сучасна пральна машина з інверторним двигуном",
        image: "https://content.rozetka.com.ua/goods/images/big_tile/286602037.jpg",
        price: 13999
    },
    {
        id: 3,
        name: "Пральна машина Samsung WW60A3S318WD",
        description: "Фронтальна пральна машина з технологією EcoBubble",
        image: "https://content2.rozetka.com.ua/goods/images/big_tile/277546396.jpg",
        price: 14299
    },
    {
        id: 4,
        name: "Акумуляторний пилосос Dyson V11 Absolute Extra Pro",
        description: "Бездротовий пилосос з максимальною потужністю всмоктування",
        image: "https://content.rozetka.com.ua/goods/images/big_tile/341821020.jpg",
        price: 27999
    },
    {
        id: 5,
        name: "Акумуляторний пилосос Xiaomi G10",
        description: "Легкий та потужний бездротовий пилосос з кольоровим дисплеєм",
        image: "https://content.rozetka.com.ua/goods/images/big_tile/509183832.jpg",
        price: 9999
    },
    {
        id: 6,
        name: "Акумуляторний пилосос Philips SpeedPro FC6723/01",
        description: "Бездротовий пилосос з вбудованою щіткою та LED-підсвіткою",
        image: "https://content.rozetka.com.ua/goods/images/big_tile/365542174.jpg",
        price: 8499
    },
    {
        id: 7,
        name: "Холодильник Bosch KGN39VL3A",
        description: "Двокамерний холодильник з технологією NoFrost",
        image: "https://content2.rozetka.com.ua/goods/images/big/11158377.jpg",
        price: 26999
    },
    {
        id: 8,
        name: "Холодильник Samsung RB34T675FSA",
        description: "Інверторний холодильник з зоною свіжості та LED-освітленням",
        image: "https://content1.rozetka.com.ua/goods/images/big/551625188.png",
        price: 24999
    },
    {
        id: 9,
        name: "Холодильник LG GA-B509SLKM",
        description: "Стильний холодильник з системою DoorCooling+",
        image: "https://content1.rozetka.com.ua/goods/images/big/444983527.jpg",
        price: 25999
    },
    {
        id: 10,
        name: "Мультипічка Tefal RK8121",
        description: "Електрична мультипічка з 45 програмами готування",
        image: "https://content2.rozetka.com.ua/goods/images/big/486975608.jpg",
        price: 3999
    },
    {
        id: 11,
        name: "Мультипічка Moulinex MK707832",
        description: "Мультиварка з програмованими режимами приготування",
        image: "https://content1.rozetka.com.ua/goods/images/big/396379084.png",
        price: 4999
    },
    {
        id: 12,
        name: "Аерогриль Philips HD9650/90",
        description: "Бездротовий аерогриль з технологією TurboStar",
        image: "https://content.rozetka.com.ua/goods/images/big/398442229.jpg",
        price: 8499
    },
    {
        id: 13,
        name: "Аерогриль Tefal Easy Fry & Grill EY505D",
        description: "2-в-1 — фритюрниця та гриль з антипригарною поверхнею",
        image: "https://content1.rozetka.com.ua/goods/images/big/279221296.jpg",
        price: 6999
    },
    {
        id: 14,
        name: "Зубна щітка Oral-B Pro 3 3900",
        description: "Електрична щітка з 3 режимами чищення та таймером",
        image: "https://content.rozetka.com.ua/goods/images/big/446156139.jpg",
        price: 3499
    },
    {
        id: 15,
        name: "Зубна щітка Philips Sonicare ProtectiveClean 4300",
        description: "Звукова щітка з датчиком натиску та зарядкою від USB",
        image: "https://content1.rozetka.com.ua/goods/images/big/327430488.jpg",
        price: 2999
    }
];


const ProductListPage = () => {
    const [products, setProducts] = useState(data);

    // код у useEffect спрацює тільки при першому рендері компоненті
    useEffect(() => {
        const localData = localStorage.getItem("products");
        if (localData) {
            setProducts(JSON.parse(localData));
        } else {
            setProducts(data);
            localStorage.setItem("products", JSON.stringify(data));
        }
    }, []);

    return (
        <>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Товари
            </Typography>
            <Grid container spacing={1} mx={3} mt={5} mb={2}>
                {products.map((product, index) => (
                    <Grid key={index} size={3}>
                        <ProductCard
                            product={product}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ textAlign: "end", mb: 2, mx: 4 }}>
                <Link to="create">
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Link>
            </Box>
        </>
    );
};

export default ProductListPage;
