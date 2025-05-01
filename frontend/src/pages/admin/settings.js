import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
} from '@mui/material';
import AdminLayout from '../../components/admin/AdminLayout';

const Settings = () => {
  const [settings, setSettings] = React.useState({
    siteName: 'E-commerce Store',
    email: 'admin@example.com',
    maintenanceMode: false,
    enableNotifications: true,
    currency: 'USD',
    timezone: 'UTC',
  });

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Add API call to save settings
    console.log('Settings saved:', settings);
  };

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {/* General Settings */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                General Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Site Name"
                    value={settings.siteName}
                    onChange={handleChange('siteName')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Admin Email"
                    value={settings.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* System Settings */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                System Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.maintenanceMode}
                        onChange={handleChange('maintenanceMode')}
                      />
                    }
                    label="Maintenance Mode"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.enableNotifications}
                        onChange={handleChange('enableNotifications')}
                      />
                    }
                    label="Enable Notifications"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Regional Settings */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Regional Settings
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Currency"
                    value={settings.currency}
                    onChange={handleChange('currency')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Timezone"
                    value={settings.timezone}
                    onChange={handleChange('timezone')}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </AdminLayout>
  );
};

export default Settings; 