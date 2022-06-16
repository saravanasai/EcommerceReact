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
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright © 2022
                                <a href="." className="link-secondary">
                                    S-Ecommerce
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
