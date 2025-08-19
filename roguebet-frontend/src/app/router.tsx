import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/routes/HomePage";
import LoginPage from "../features/auth/routes/LoginPage";
import RegisterPage from "../features/auth/routes/RegisterPage";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";

const router = createBrowserRouter([
    // auth screens = public routes
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />
    },

    // app screens = private (access only with login)
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ]
    },
])

export function AppRouter() {
    return <RouterProvider router = {router} />;
}