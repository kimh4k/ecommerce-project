import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { CircularProgress, Box } from '@mui/material';

export default function AuthGuard({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (!loading) {
      if (!user && router.pathname !== '/login') {
        router.push('/login');
      } else if (user && user.role !== 'admin' && router.pathname !== '/login') {
        router.push('/login');
      } else {
        setIsChecking(false);
      }
    }
  }, [user, loading, router]);

  if (loading || isChecking) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Allow access to login page without being logged in
  if (router.pathname === '/login') {
    return children;
  }

  // Only render children if user is authenticated and is an admin
  return user && user.role === 'admin' ? children : null;
}