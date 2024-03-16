import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context';

const PrivateRoutes = () => {
    const { isLoggedIn, login, logout } = useAuth();
    return(
         isLoggedIn? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes