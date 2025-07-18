import * as authActions from "./authReducer/authActions";
import * as cartActions from "./cartReducer/cartActions";

export const actions = {
    ...authActions,
    ...cartActions
}