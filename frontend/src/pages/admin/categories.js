import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import AdminLayout from '../../components/admin/AdminLayout';

const Categories = () => {
  const [open, setOpen] = React.useState(false);
  const [categoryName, setCategoryName] = React.useState('');

  // Sample data - replace with actual API call
  const categories = [
    { id: 1, name: 'Electronics', productCount: 150 },
    { id: 2, name: 'Clothing', productCount: 300 },
    { id: 3, name: 'Books', productCount: 200 },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCategoryName('');
  };

  const handleSave = () => {
    // Add API call to save category
    handleClose();
  };

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4">Categories Management</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add New Category
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="categories table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Product Count</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>{category.id}</TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell>{category.productCount}</TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add Category Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Category</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Category Name"
              type="text"
              fullWidth
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default Categories; 