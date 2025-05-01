import React from 'react';
import { useRouter } from 'next/router';
import AuthGuard from '../auth/AuthGuard';
import AdminLayout from '../admin/AdminLayout';

const Layout = ({ children }) => {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith('/admin');

  if (isAdminPage) {
    return (
      <AuthGuard>
        <AdminLayout>{children}</AdminLayout>
      </AuthGuard>
    );
  }

  return <>{children}</>;
};

export default Layout; 