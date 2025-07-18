const authInitState = {
    user: null,
    isAuth: false,
};

const authReducer = (state = authInitState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isAuth: true, user: action.payload };
        case "REGISTER":
            return { ...state, isAuth: true, user: action.payload };
        case "LOGOUT":
            return { ...state, isAuth: false, user: null };
        default:
            return state;
    }
};

export default authReducer;
