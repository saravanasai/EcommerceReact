import { useState } from "react";

const AuthLayout = () => {


    const [state,setState]=useState({email:'',password:''})



    return (
        <>
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
                                onChange={(e)=>setState(prev=>({...prev,email:e.target.value}))}
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
                                    type="password"
                                    onChange={(e)=>setState(prev=>({...prev,password:e.target.value}))}
                                    className="form-control"
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                                <span className="input-group-text">
                                    <a
                                        href="#"
                                        className="link-secondary"
                                        data-bs-toggle="tooltip"
                                    >
                                        {/* Download SVG icon from http://tabler-icons.io/i/eye */}
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
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <span className="form-check-label">
                                    Remember me on this device
                                </span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button
                                type="submit"
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
};

export default AuthLayout;
