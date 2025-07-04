import Navbar from "./components/navbar/Navbar";
import CategoryListPage from "./pages/category/CategoryListPage";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<CategoryListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
