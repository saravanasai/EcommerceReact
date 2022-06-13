import { Outlet, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <>
            <div class="page">
                <Header />
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
