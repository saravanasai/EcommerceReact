import Logout from "../Logout/Logout";

const Header = () => {
    return (
        <header className="navbar navbar-expand-md navbar-dark d-print-none">
            <div className="container-xl">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-menu"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    S-Ecommerce
                </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="nav-item d-none d-md-flex me-3">
                        <div className="btn-list">
                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
