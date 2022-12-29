import { Navigate,Outlet } from "react-router-dom";


const ProtectedRoute = ({children})  => {

    let auth =localStorage.getItem("token");
    if(!auth){
        return <Navigate to="/login" />
    }

  return children ? children : <Outlet/>;
}

export default ProtectedRoute
