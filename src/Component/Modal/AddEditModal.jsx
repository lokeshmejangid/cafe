import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Button } from "@mui/material";
import { toast } from 'react-toastify';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';

const AddEditModal = (props) => {
  const [txtItemCategory, setItemCategory] = useState('');
  const [txtItemName, setItemName] = useState('');
  const [txtPrice, setPrice] = useState('');
  const [isBtnVisible, setBtnVisible] = useState(false);

  const { isEdit, editData, handleClose } = props;

  const SaveItem = () => {
    toast('Item Save');
  }

  useEffect(() => {
   
  })

  const handleVisibility = () => {
    if (txtItemName.length > 0 && txtItemCategory.length > 0 && txtPrice.length > 0) setBtnVisible(true)
    else setBtnVisible(false)
  }

  useEffect(() => {
    handleVisibility();
  }, [txtItemName, txtItemCategory, txtPrice])

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + " " + value);

    if (name === 'txtItemName') {
      setItemName(value)
    } else if (name === 'txtItemCategory') {
      setItemCategory(value)
    } else if (name === 'txtPrice') {
      setPrice(value)
    } else {
      //todo
    }
    handleVisibility();
  }

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
          <TextField id="txtItemName" name="txtItemName" label="Menu Name" value={txtItemName} variant="outlined" fullWidth onChange={handleChange} />
        </Grid>
        <Grid item xs={12} >
          <FormControl fullWidth>
            <InputLabel id="lblCategory">Category</InputLabel>
            <Select
              labelId="lblCategory"
              id="txtItemCategory"
              value={txtItemCategory}
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
          <TextField id="txtPrice" type='number' value={txtPrice} label="Price" variant="outlined" fullWidth name='txtPrice' onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }} className='saveBtn'>
          <Button variant="contained" onClick={SaveItem} disabled={isBtnVisible ? false : true}>Save</Button>
        </Grid>
        <div></div>
      </Grid>
    </Modal>
  )
}


export default AddEditModal