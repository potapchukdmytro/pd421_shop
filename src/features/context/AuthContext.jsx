import { createContext, useState, useContext } from "react";

// Context
export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleLogin = (userData) => {
        localStorage.setItem("googleAuth", JSON.stringify(userData));
        setUser(userData);
    };

    const login = (data) => {
        const usersLocal = localStorage.getItem("users");
        if (usersLocal) {
            const users = JSON.parse(usersLocal);
            const findedUser = users.find((u) => u.email === data.email);

            if (findedUser) {
                if (findedUser.password === data.password) {
                    setUser(data);
                    if (data.rememberMe) {
                        localStorage.setItem(
                            "auth",
                            JSON.stringify(findedUser)
                        );
                    }
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

    return (
        <AuthContext.Provider value={{ user, login, googleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

// hook
export const useAuth = () => useContext(AuthContext);