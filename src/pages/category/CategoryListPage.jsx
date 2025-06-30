import { useState, useEffect } from "react";
import {
    Typography,
    Grid,
    Container,
    Box,
    TextField,
    Button,
} from "@mui/material";
import CategoryCard from "../../components/cards/CategoryCard";

const data = [
    {
        name: "Пральні машини",
        description: "Пральні машини",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476855785.png",
    },
    {
        name: "Акумуляторні пилососи",
        description: "Акумуляторні пилососи",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476858628.png",
    },
    {
        name: "Холодильники",
        description: "Холодильники",
        image: "https://content.rozetka.com.ua/constructor/images_site/original/476858800.png",
    },
    {
        name: "Мультипічки і аерогрилі",
        description: "Мультипічки і аерогрилі",
        image: "https://content2.rozetka.com.ua/constructor/images_site/original/476858824.png",
    },
    {
        name: "Зубні щітки",
        description: "Зубні щітки",
        image: "https://content.rozetka.com.ua/constructor/images_site/original/476858833.png",
    },
    {
        name: "Обігрівачі",
        description: "Обігрівачі",
        image: "https://content1.rozetka.com.ua/constructor/images_site/original/476858856.png",
    },
    {
        name: "Велика побутова техніка",
        description: "Велика побутова техніка",
        image: "https://content1.rozetka.com.ua/constructor/images_site/original/325504069.png",
    },
];

const CategoryListPage = () => {
    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        image: "",
    });
    const [categories, setCategories] = useState(data);

    // код у useEffect спрацює тільки при першому рендері компоненті
    useEffect(() => {
        const localData = localStorage.getItem("categories");
        if (localData) {
            setCategories(JSON.parse(localData));
        }
    }, []);

    const inputChangeHandler = (newValue, prop) => {
        const newData = { ...inputData };
        newData[prop] = newValue;
        setInputData(newData);
    };

    const createCategoryHandler = () => {
        const newCategory = {
            name: inputData.name,
            description: inputData.description,
            image: inputData.image,
        };

        const newData = [...categories, newCategory];
        setCategories(newData);
        localStorage.setItem("categories", JSON.stringify(newData));
    };

    return (
        <Container>
            <Typography mt={3} variant="h3" sx={{ textAlign: "center" }}>
                Категорії
            </Typography>
            <Box
                my={2}
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <TextField
                    onChange={(e) => inputChangeHandler(e.target.value, "name")}
                    value={inputData.name}
                    label="Назва"
                    variant="standard"
                />
                <TextField
                    onChange={(e) =>
                        inputChangeHandler(e.target.value, "description")
                    }
                    value={inputData.description}
                    label="Опис"
                    variant="standard"
                />
                <TextField
                    onChange={(e) =>
                        inputChangeHandler(e.target.value, "image")
                    }
                    value={inputData.image}
                    label="Зображення"
                    variant="standard"
                />
                <Button onClick={createCategoryHandler} variant="contained">
                    Додати
                </Button>
            </Box>
            <Grid container spacing={1} mx={3} my={5}>
                {categories.map((category, index) => (
                    <Grid key={index} size={3}>
                        <CategoryCard category={category} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoryListPage;
