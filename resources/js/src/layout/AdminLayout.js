import { Toaster } from "react-hot-toast";
import { Outlet, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const AdminLayout = () => {
    return (
        <>
         <Toaster/>
            <div class="page">
                <Header />
                <Navbar />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card p-2 h-100 mt-2">
                        <div className="container p-2">
                            <Outlet />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLayout;
