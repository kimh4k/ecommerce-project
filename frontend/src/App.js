import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './config/routes';
import MainLayout from './layouts/MainLayout';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ResetPassword from './pages/auth/ResetPassword';

// User Pages
import Home from './pages/user/Home';
import Profile from './pages/user/Profile';
import Cart from './pages/user/Cart';
import Address from './pages/user/Address';
import Orders from './pages/user/Orders';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ProductManagement from './pages/admin/ProductManagement';
import CategoryManagement from './pages/admin/CategoryManagement';
import OrderManagement from './pages/admin/OrderManagement';
import ActivityLogs from './pages/admin/ActivityLogs';
import Reports from './pages/admin/Reports';

const App = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.SIGNUP} element={<Signup />} />
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />

      {/* User Routes */}
      <Route path={ROUTES.HOME} element={<MainLayout><Home /></MainLayout>} />
      <Route path={ROUTES.PROFILE} element={<MainLayout><Profile /></MainLayout>} />
      <Route path={ROUTES.CART} element={<MainLayout><Cart /></MainLayout>} />
      <Route path={ROUTES.ADDRESS} element={<MainLayout><Address /></MainLayout>} />
      <Route path={ROUTES.ORDERS} element={<MainLayout><Orders /></MainLayout>} />

      {/* Admin Routes */}
      <Route path={ROUTES.ADMIN_DASHBOARD} element={<MainLayout><Dashboard /></MainLayout>} />
      <Route path={ROUTES.USER_MANAGEMENT} element={<MainLayout><UserManagement /></MainLayout>} />
      <Route path={ROUTES.PRODUCT_MANAGEMENT} element={<MainLayout><ProductManagement /></MainLayout>} />
      <Route path={ROUTES.CATEGORY_MANAGEMENT} element={<MainLayout><CategoryManagement /></MainLayout>} />
      <Route path={ROUTES.ORDER_MANAGEMENT} element={<MainLayout><OrderManagement /></MainLayout>} />
      <Route path={ROUTES.ACTIVITY_LOGS} element={<MainLayout><ActivityLogs /></MainLayout>} />
      <Route path={ROUTES.REPORTS} element={<MainLayout><Reports /></MainLayout>} />
    </Routes>
  );
};

export default App; 