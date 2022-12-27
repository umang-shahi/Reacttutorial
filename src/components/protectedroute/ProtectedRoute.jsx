import { useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ProtectedRoute = ({children})  => {
    const navigate = useNavigate();
    let auth =localStorage.getItem("token");

    useEffect (()=> {
        if (!auth) {
            navigate("/login");
        }
    },[auth,navigate]);

  return children;
}

export default ProtectedRoute
