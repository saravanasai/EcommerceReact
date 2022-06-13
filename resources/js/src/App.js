import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./routes/routes";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map(({ Component, Path }, i) => {
                        return (
                            <Route
                                key={i}
                                path={Path}
                                element={<Component />}
                            />
                        );
                    })}
                </Route>
                <Route path="/login" element={<AuthLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
