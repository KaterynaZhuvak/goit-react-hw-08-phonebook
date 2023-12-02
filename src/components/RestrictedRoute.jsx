import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectAuthAuthenticated } from "redux/Auth/auth.selectors"

export const RestrictedRoute = ({ children, navigateTo = '/' }) => {
    const authenticated = useSelector(selectAuthAuthenticated)
    return authenticated ? <Navigate to={navigateTo} replace /> : children;
}