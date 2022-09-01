import { AuthContext } from "../auth/context/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ( { children } ) => {


    const { logged } = useContext( AuthContext );
    const { search, pathname } = useLocation();
    console.log( search, pathname)
 
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
       


  return ( logged )

    ? children
    : <Navigate to="/login"/>
}
