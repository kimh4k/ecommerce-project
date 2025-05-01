import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import AdminLayout from '../../components/admin/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Total Users Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total Users
              </Typography>
              <Typography component="p" variant="h4">
                1,234
              </Typography>
            </Paper>
          </Grid>
          {/* Total Products Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total Products
              </Typography>
              <Typography component="p" variant="h4">
                567
              </Typography>
            </Paper>
          </Grid>
          {/* Total Orders Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total Orders
              </Typography>
              <Typography component="p" variant="h4">
                890
              </Typography>
            </Paper>
          </Grid>
          {/* Revenue Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography component="p" variant="h4">
                $45,678
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Dashboard; 