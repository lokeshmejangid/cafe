import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const AddEditModal = (props) => {
  const { isEdit, handleClose, editData, handleUpdate } = props;

  const [txtItemName, setItemName] = useState("");
  const [txtItemCategory, setItemCategory] = useState("");
  const [txtItemPrice, setItemPrice] = useState("");

  const [isBtnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    if (editData !== null && editData !== undefined) {
      setItemName(editData[1]);
      setItemCategory(editData[2]);
      setItemPrice(editData[3]);
    }
  }, [editData]);

  useEffect(() => {
    handleBtnVisibility();
  }, [txtItemName, txtItemCategory, txtItemPrice]);



  const handleSave = () => {
    handleClose();
    const updatedData = {
      itemName: txtItemName,
      price: txtItemPrice,
      category: txtItemCategory,
    };
    handleUpdate(updatedData);
  };

  const handleBtnVisibility = () => {
    if (
      txtItemName.length > 0 &&
      txtItemCategory.length > 0 &&
      txtItemPrice.length > 0
    )
      setBtnVisible(true);
    else setBtnVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "txtItemName") {
      setItemName(value);
    } else if (name === "txtItemCategory") {
      setItemCategory(value);
    } else if (name === "txtItemPrice") {
      setItemPrice(value);
    } else {
      // Handle other casesll
    }

    handleBtnVisibility();
  };

  return (
    <Modal
      open={isEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container spacing={0} className="modal">
        <Grid item xs={12}>
          <div className="title">
            {editData !== undefined ? "Edit Menu" : "Add Menu"}
          </div>
        </Grid>
        <Grid item xs={12} justifyContent={"center"}>
          <TextField
            id="txtItemName"
            name="txtItemName"
            label="Item Name"
            variant="outlined"
            fullWidth
            value={txtItemName}
            onChange={handleChange}
          />
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

          <TextField
            id="txtItemPrice"
            name="txtItemPrice"
            label="Item Price"
            variant="outlined"
            type="number"
            fullWidth
            sx={{ mt: 1 }}
            value={txtItemPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={0}
          justifyContent={"center"}
          mt={2}
        >
          <Button
            variant="contained"
            onClick={handleSave}
            disabled={isBtnVisible ? false : true}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEditModal;
