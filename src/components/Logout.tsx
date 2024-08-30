import { AppDispatch } from '@/app/store'
import { clearCredentials } from '@/features/auth/authSlice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Logout = () => {
  console.log('logout clicked')
    const dispatch=useDispatch<AppDispatch>()
    const navigate=useNavigate()
    
        dispatch(clearCredentials())
        toast.success('Logged out successfully')
        navigate('/login')
  
 
}

export default Logout
