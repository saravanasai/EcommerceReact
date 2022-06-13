const Footer = () => {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                <a
                                    href="./docs/index.html"
                                    className="link-secondary"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="./license.html"
                                    className="link-secondary"
                                >
                                    License
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://github.com/tabler/tabler"
                                    target="_blank"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    Source code
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="https://github.com/sponsors/codecalm"
                                    target="_blank"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/heart */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon text-pink icon-filled icon-inline"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <desc>
                                            Download more icon variants from
                                            https://tabler-icons.io/i/heart
                                        </desc>
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                    Sponsor
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright © 2022
                                <a href="." className="link-secondary">
                                    Tabler
                                </a>
                                . All rights reserved.
                            </li>
                            <li className="list-inline-item">
                                Generated 2022-06-09 20:45 UTC
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
