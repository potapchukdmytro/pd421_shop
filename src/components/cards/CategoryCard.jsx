import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CategoryCard = ({ category }) => {
    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea sx={{height: "100%"}}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={category.image}
                    alt={category.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        {category.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CategoryCard;
