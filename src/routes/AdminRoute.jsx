import React from 'react';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <process className="progress w-56"></process>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={"/"} state={{from: location}} replace></Navigate>;
};

export default AdminRoute;