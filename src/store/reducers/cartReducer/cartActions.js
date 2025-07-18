export const addToCart = (product) => (dispatch) => {
    if (!isInCart(product.id)) {
        let cartList = [];
        const cartItem = { ...product, count: 1 };
        const localData = localStorage.getItem("cart");
        if (localData) {
            cartList = JSON.parse(localData);
        }
        cartList.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cartList));
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
};

export const isInCart = (id) => {
    const localData = localStorage.getItem("cart");
    if (localData) {
        const cartList = JSON.parse(localData);
        return cartList.findIndex((p) => p.id === id) >= 0;
    }
    return false;
};
