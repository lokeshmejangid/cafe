import React from 'react';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Button } from "@mui/material";
import { toast } from 'react-toastify';

const DeleteModal = (props) => {
  const { isDelete, handleClose } = props;

  const DeleteItem = () => {
    toast('Item Delete');
  }

  return (
    <Modal
      open={isDelete}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Grid container spacing={0} className="modal">
        <Grid item xs={12}>
          <p>Are you sure, you want delete </p>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={DeleteItem}>Delete</Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default DeleteModal;