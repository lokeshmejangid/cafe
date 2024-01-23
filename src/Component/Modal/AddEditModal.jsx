import React from 'react';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Button } from "@mui/material";
import { toast } from 'react-toastify';


const AddEditModal = (props) => {
  const { isEdit, handleClose } = props;

  const SaveItem = () => {
    toast('Item Save');
  }

  return (
    <Modal
      open={isEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Grid container spacing={0} className="modal">
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="ItemName" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Category" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={SaveItem}>Save</Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEditModal;