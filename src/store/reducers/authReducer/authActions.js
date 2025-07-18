// export function login() {
//     return (dispatch) => {

//     }
// }

export const login = (user) => (dispatch) => {
    const usersLocal = localStorage.getItem("users");
    if (usersLocal) {
        const users = JSON.parse(usersLocal);
        const findedUser = users.find((u) => u.email === user.email);

        if (findedUser) {
            if (findedUser.password === user.password) {
                if (user.rememberMe) {
                    localStorage.setItem("auth", JSON.stringify(findedUser));
                }
                // Success
                dispatch({ type: "LOGIN", payload: user });
                return true;
            } else {
                console.log("Incorrect password");
            }
        } else {
            console.log("Incorrect email");
        }
    }
    return false;
};

export const register = (newUser) => (dispatch) => {
    let users = [];
    const localData = localStorage.getItem("users");
    if (localData) {
        users = JSON.parse(localData);
    }

    if (users.find((u) => u.email === newUser.email)) {
        return false;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // const resFunction = login(newUser);
    // return resFunction(dispatch);
    return login({ ...newUser, rememberMe: true })(dispatch);
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({ type: "LOGOUT" });
};
