import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = (children) => {
    const [user,loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation;
    if(loading || isAdminLoading){
        return <span className="loading loading-infinity loading-md"></span>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
   
};

export default AdminRoute;