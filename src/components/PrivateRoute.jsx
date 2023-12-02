import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectAuthAuthenticated } from "redux/Auth/auth.selectors"

export const PrivateRoute = ({ children, navigateTo = '/login' }) => {
    const authenticated = useSelector(selectAuthAuthenticated)
    return authenticated ? children : <Navigate to={navigateTo} replace />;
}