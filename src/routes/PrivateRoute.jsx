import React, { useContext } from 'react';
import { AuthContext } from './../Providers/AuthProvider';
import {Navigate} from 'react-router'
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (<><span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></>)
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={{form:location}} replace></Navigate>;
};

export default PrivateRoute;