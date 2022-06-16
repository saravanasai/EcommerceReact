import React from "react";
import AdminLayout from "./layout/AdminLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import routes from "./routes/routes";
import Dashboard from "./pages/Admin/Dashboard";
import AuthService from "./service/AuthService";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home/Home";
function App() {
    const authenticated = AuthService.isAuthenticated();
    const user = AuthService.authenticatedUser()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user.is_admin==1 ? <Navigate to="/dashboard" /> : <Home />} />
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
                 <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
