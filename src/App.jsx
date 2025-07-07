import Navbar from "./components/navbar/Navbar";
import CategoryListPage from "./pages/category/CategoryListPage";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import CategoryCreatePage from "./pages/category/CategoryCreatePage";
import CategoryUpdatePage from "./pages/category/CategoryUpdatePage";
import HomePage from "./pages/home/HomePage";
import DefaultLayout from "./components/layouts/DefaultLayout";

import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/categories">
                        <Route index element={<CategoryListPage />} />
                        <Route path="create" element={<CategoryCreatePage />} />
                        <Route
                            path="edit/:name"
                            element={<CategoryUpdatePage />}
                        />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
