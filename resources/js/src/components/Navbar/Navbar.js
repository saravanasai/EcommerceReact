import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-expand-md">
            <div className="collapse navbar-collapse" id="navbar-menu">
                <div className="navbar navbar-light">
                    <div className="container-xl">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-bolder"
                                            : "nav-link"
                                    }
                                    to="/dashboard"
                                >
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-dashboard"
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
                                                https://tabler-icons.io/i/dashboard
                                            </desc>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <circle
                                                cx="12"
                                                cy="13"
                                                r="2"
                                            ></circle>
                                            <line
                                                x1="13.45"
                                                y1="11.55"
                                                x2="15.5"
                                                y2="9.5"
                                            ></line>
                                            <path d="M6.4 20a9 9 0 1 1 11.2 0z"></path>
                                        </svg>
                                    </span>
                                    <span className="nav-link-title">
                                        Dashboard
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link fw-bolder"
                                            : "nav-link"
                                    }
                                    to="products"
                                >
                                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                                        {/* Download SVG icon from http://tabler-icons.io/i/home */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-brand-producthunt"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="9"
                                            ></circle>
                                        </svg>
                                    </span>
                                    <span className="nav-link-title">Products</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
