const cartInitState = {
    cartList: [],
    cartCount: 0
}

export const cartReducer = (state = cartInitState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state, cartList: [...state.cartList, action.payload], cartCount: state.cartCount + action.payload.count};
        default:
            return state;
    }
}