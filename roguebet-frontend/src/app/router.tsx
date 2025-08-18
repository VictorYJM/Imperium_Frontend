import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/routes/HomePage";
import LoginPage from "../features/auth/routes/LoginPage";
import RegisterPage from "../features/auth/routes/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
])

export function AppRouter() {
    return <RouterProvider router = {router} />;
}