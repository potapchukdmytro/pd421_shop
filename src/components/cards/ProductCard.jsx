import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useCart } from "../../features/context/CartContext";

const ProductCard = ({ product }) => {
    const {addToCart, removeFromCart, isInCart} = useCart();

    return (
        <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardMedia
                component="img"
                sx={{ maxHeight: "400px", objectFit: "contain" }}
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.description}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "black", fontWeight: "bold" }}
                >
                    {product.price} ₴
                </Typography>
                <Box>
                    {isInCart(product.id) ? (
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ mt: 2 }}
                            onClick={() => removeFromCart(product.id)}
                        >
                            Remove from cart
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="success"
                            sx={{ mt: 2 }}
                            onClick={() => addToCart(product)}
                        >
                            Add to cart
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
