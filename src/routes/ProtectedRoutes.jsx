import {Navigate , Outlet} from 'react-router-dom';
import { useSelector} from 'react-redux';

function ProtectedRoutes(){
    const isLoggedIn = useSelector((state)=>state.auth.status)

    return <div>{isLoggedIn ? <Outlet/> : <Navigate to='/auth' />}</div>
}

export default ProtectedRoutes