import React from 'react';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Button } from "@mui/material";


const DeleteModal = (props) => {
  const { isDelete, handleClose } = props;

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
       <Button variant="contained">Delete</Button>
       </Grid>
      </Grid>
    </Modal>
  );
};

export default DeleteModal;