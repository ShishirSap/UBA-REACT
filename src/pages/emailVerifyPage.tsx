import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '@/services/api';
import { toast } from 'react-toastify';

const VerifyEmail: React.FC = () => {
  const [verifyEmail] = useVerifyEmailMutation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    console.log('useeffect triggered')
    const verifyUserEmail = async () => {
      if (token) {
        try {
          const response= await verifyEmail({ token }).unwrap();
          console.log('response is',response)
          toast.success('Email verified successfully! You can now log in.');
          navigate('/login');
        } catch (error) {
            console.log('Error is ',error)
          setError('Email verification failed or token is invalid.');
          toast.error('Email verification failed or token is invalid.');
          navigate('/signup');
        } finally {
          setIsLoading(false);
        }
      } else {
        setError('Verification token is missing.');
        toast.error('Verification token is missing.');
        navigate('/signup');
      }
    };
    verifyUserEmail();
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading && <h2>Verifying your email...</h2>}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default VerifyEmail;
