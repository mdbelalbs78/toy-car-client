import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log('your route', user);
    
if(loading){
    return <div>
        loading
    </div>
}
    if(user){
        return children;
    }
   
    return <Navigate to='/login' state={{from: location}}  replace></Navigate>
};

export default PrivateRoute;