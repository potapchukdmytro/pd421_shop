const authInitState = {
    user: null,
    isAuth: false,
};

const login = (data) => {
    const usersLocal = localStorage.getItem("users");
    if (usersLocal) {
        const users = JSON.parse(usersLocal);
        const findedUser = users.find((u) => u.email === data.email);

        if (findedUser) {
            if (findedUser.password === data.password) {
                if (data.rememberMe) {
                    localStorage.setItem("auth", JSON.stringify(findedUser));
                }
                return data;
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("Incorrect email");
        }
    }
    return null;
};

const authReducer = (state = authInitState, action) => {
    switch (action.type) {
        case "LOGIN":
            const user = login(action.payload);
            if(user) {
                return { ...state, isAuth: true, user: user };
            } else {
                return state;
            }
        case "REGISTER":
            return { ...state, isAuth: true, user: action.payload };
        case "LOGOUT":
            localStorage.removeItem("auth");
            return { ...state, isAuth: false, user: null };
        default:
            return state;
    }
};

export default authReducer;
