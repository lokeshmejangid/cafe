import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, TextField, Button } from "@mui/material";
import { TodayOutlined } from "@mui/icons-material";

const AddEditModal = (props) => {
  const { isEdit, handleClose, editData, handleUpdate } = props;

  const [txtItemName, setItemName] = useState("");
  const [txtItemCategory, setItemCategory] = useState("");
  const [txtItemPrice, setItemPrice] = useState("");

  useEffect(() => {
    setItemName(editData[1]);
    setItemCategory(editData[2]);
    setItemPrice(editData[3]);
  }, []);

  const handleSave = () => {
    handleClose();
    handleUpdate();
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
      // Handle other cases
    }
  };

  return (
    <Modal
      open={isEdit}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container spacing={0} className="modal">
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
          <TextField
            id="txtItemCategory"
            name="txtItemCategory"
            label="Item Category"
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            value={txtItemCategory}
            onChange={handleChange}
          />
          <TextField
            id="txtItemPrice"
            name="txtItemPrice"
            label="Item Price"
            variant="outlined"
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
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEditModal;
