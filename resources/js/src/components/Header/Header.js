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
                            <a
                                href="https://github.com/sponsors/codecalm"
                                className="btn btn-dark"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-logout"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <desc>
                                        Download more icon variants from
                                        https://tabler-icons.io/i/logout
                                    </desc>
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                    <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                                </svg>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
