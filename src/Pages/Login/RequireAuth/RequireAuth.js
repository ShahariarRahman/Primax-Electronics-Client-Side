import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    console.log('Verified= ', user?.emailVerified);
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!user?.emailVerified) {
        return <Navigate to='/emailverification' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;