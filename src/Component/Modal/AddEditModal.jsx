import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Button } from "@mui/material";
import { toast } from 'react-toastify';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';

const AddEditModal = (props) => {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const { isEdit, editData, handleClose } = props;

  const SaveItem = () => {
    toast('Item Save');
  }

  useEffect(() => {
    if (editData !== undefined) {
    }
  })

  return (
    <Modal
      open={isEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Grid container spacing={0} className="modal">
        <div className='addMenu'>Add Menu</div>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="ItemName" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="lblCategory">Category</InputLabel>
            <Select
              labelId="lblCategory"
              id="txtItemCategory"
              value={category}
              label="Category"
              name="txtItemCategory"
              sx={{ mt: 1 }}
              onChange={handleChange}
            >
              <MenuItem value='Drinks'>Drinks</MenuItem>
              <MenuItem value='Food'>Food</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField id="outlined-basic" type='number' label="Price" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={2} sx={{ mt: 2 }}>
          <Button variant="contained" onClick={SaveItem}>Save</Button>
        </Grid>
        <div></div>
      </Grid>
    </Modal>
  );
};

export default AddEditModal;