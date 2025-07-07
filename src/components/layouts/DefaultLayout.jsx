import { Container } from "@mui/material";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <Container sx={{minHeight: "100vh", mt: 2}}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};

export default DefaultLayout;
