export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    'view_dashboard',
    'manage_users',
    'manage_products',
    'manage_categories',
    'manage_orders',
    'view_activity_logs',
    'view_reports',
  ],
  [ROLES.USER]: [
    'view_profile',
    'manage_cart',
    'manage_addresses',
    'view_orders',
  ],
}; 