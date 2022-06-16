import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {


    const navigate = useNavigate()

    return (
        <div className="container-tight py-4 mt-5">
            <div className="empty">
                <div className="empty-header">404</div>
                <p className="empty-title">
                    Oops… You just found an error page
                </p>
                <p className="empty-subtitle text-muted">
                    We are sorry but the page you are looking for was not found
                </p>
                <div className="empty-action">
                    <Link   to='/' className="btn btn-primary">
                        {/* Download SVG icon from http://tabler-icons.io/i/arrow-left */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                            <line x1={5} y1={12} x2={11} y2={18} />
                            <line x1={5} y1={12} x2={11} y2={6} />
                        </svg>
                        Take me home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
