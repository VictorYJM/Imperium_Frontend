import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/routes/HomePage";
import LoginPage from "../features/auth/routes/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    }
])

export function AppRouter() {
    return <RouterProvider router = {router} />;
}