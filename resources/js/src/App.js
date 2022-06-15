import React from "react";
import AdminLayout from "./layout/AdminLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./routes/routes";
import Dashboard from "./pages/Admin/Dashboard";
import AuthService from "./service/AuthService";
function App() {
    const authenticated = AuthService.isAuthenticated();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Home</>} />
                <Route
                    path="/dashboard"
                    element={
                        authenticated ? (
                            <AdminLayout />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                >
                    <Route index element={<Dashboard />} />
                    {routes.map(({ Component, Path, Index }, i) => {
                        return (
                            <Route
                                index={Index}
                                key={i}
                                path={Path}
                                element={<Component />}
                            />
                        );
                    })}
                </Route>
                <Route
                    path="/login"
                    element={
                        authenticated ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <AuthLayout />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
