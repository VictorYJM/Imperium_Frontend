import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export function ProtectedRoute() {
    const session = useAuthStore((state) => state.session)
    if (!session) { return <Navigate to="/login" replace /> }

    return <Outlet />
}