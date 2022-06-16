import { replace } from "lodash";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/AuthService";

function AuthLayout() {
    const [state, setState] = useState({
        email: "admin@exciteon.com",
        password: "1234",
    });

    const [visibility, setVisibility] = useState(false);
    const handlePasswordToggle = () => {
        setVisibility((prev) => !prev);
    };

    const handleLogin = () => {
        const loadingToast = toast.loading("Authenticating...");
        AuthService.login(state)
            .then((e) => {
                toast.dismiss(loadingToast);
                if (e.status == 200) {
                    toast.success("Authenticated Successfully!");
                    AuthService.authenticate(e.data.token, e.data.data);

                    setTimeout(() => {
                        window.location.href =
                            window.location.origin + "/dashboard";
                    }, 1000);
                }
            })
            .catch((e) => {
                toast.dismiss(loadingToast);
                if (e.response.status == 401) {
                    // console.log(e.);
                    toast.error(`${e.response.data.message}`);
                }
                if (e.response.status == 422) {
                    toast.error(`${e.response.data.errors.password}`);
                }
            });
    };

    return (
        <>
            <Toaster />
            <div className="container-tight py-4 mt-5">
                <div className="text-center mb-4"></div>
                <form
                    className="card card-md"
                    action="."
                    method="get"
                    autoComplete="off"
                >
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">
                            Login to your account
                        </h2>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                onChange={(e) =>
                                    setState((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
                                value={state.email}
                                className="form-control"
                                placeholder="Enter email"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Password
                                {/* <span className="form-label-description">
                                    <a href="./forgot-password.html">
                                        I forgot password
                                    </a>
                                </span> */}
                            </label>
                            <div className="input-group input-group-flat">
                                <input
                                    type={visibility ? "text" : "password"}
                                    value={state.password}
                                    onChange={(e) =>
                                        setState((prev) => ({
                                            ...prev,
                                            password: e.target.value,
                                        }))
                                    }
                                    className="form-control"
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                <span className="input-group-text">


                                    <a
                                        onClick={handlePasswordToggle}
                                        href="#"
                                        className="link-secondary"
                                        data-bs-toggle="tooltip"
                                    >
                                      {visibility ? <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-eye-off"
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
                                        <line
                                            x1="3"
                                            y1="3"
                                            x2="21"
                                            y2="21"
                                        ></line>
                                        <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                                        <path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                                    </svg> : <svg
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
                                            <desc>
                                                Download more icon variants from
                                                https://tabler-icons.io/i/eye
                                            </desc>
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <circle cx={12} cy={12} r={2} />
                                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                        </svg> }

                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="form-footer">
                            <button
                                onClick={handleLogin}
                                type="button"
                                className="btn btn-primary w-100"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
                <div className="text-center text-muted mt-3">
                    Don't have account yet?{" "}
                    <a href="./sign-up.html" tabIndex={-1}>
                        Sign up
                    </a>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
