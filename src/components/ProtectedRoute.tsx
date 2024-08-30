import { selectIsAuthenticated } from '@/features/auth/authSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
interface ProtectedRouteProps{
    children:React.ReactElement;
}

const ProtectedRoute:React.FC<ProtectedRouteProps>= ({children}) => {

    const isAuthenticated=!!localStorage.getItem('token')
    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
        
    }
  return children
}

export default ProtectedRoute
