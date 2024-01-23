import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { Grid, TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const AddEditModal = (props) => {
  const { invoice, subTotal, handleClose, handleBills } = props;

  const [txtCustomerName, setCustomerName] = useState("");
  const [txtContNumber, setCustomerNumber] = useState("");
  const [txtPaymentMethod, setPaymentMethod] = useState("");

  const [isBtnVisible, setBtnVisible] = useState(false);

  let tax = (subTotal * 0.1).toFixed(2);
  let total = parseFloat(subTotal) + parseFloat(tax); 

  useEffect(() => {}, []);

  const handleInvoice = () => {
    handleClose();
    const data = {
      "customerName": txtCustomerName,
      "customerNumber": txtContNumber,
      "paymentMethod": txtPaymentMethod,
      "subTotal": subTotal,
      "tax": tax,
      "totalAmount": total
    }
    handleBills(data);
  };

  useEffect(() => {
    handleBtnVisibility();
  }, [txtCustomerName, txtContNumber, txtPaymentMethod]);

  const handleBtnVisibility = () => {
    if (
      txtCustomerName.length > 0 &&
      txtContNumber.length > 0 &&
      txtPaymentMethod.length > 0
    )
      setBtnVisible(true);
    else setBtnVisible(false);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "txtCustomerName") {
      setCustomerName(value);
    } else if (name === "txtContNumber") {
      setCustomerNumber(value);
    } else if (name === "txtPaymentMethod") {
      setPaymentMethod(value);
    } else {
      // Handle other cases
    }
    handleBtnVisibility();
  };

  return (
    <Modal
      open={invoice}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container spacing={0} className="modal">
        <Grid item xs={12}>
          <div className="title">Generate Invoice</div>
        </Grid>
        <Grid item xs={12} justifyContent={"center"}>
          <TextField
            id="txtCustomerName"
            name="txtCustomerName"
            label="Customer Name"
            variant="outlined"
            fullWidth
            value={txtCustomerName}
            onChange={handleChange}
          />
          <TextField
            id="txtContNumber"
            name="txtContNumber"
            label="Contact Number"
            type="number"
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
            value={txtContNumber}
            error={txtContNumber.length > 10 ? '': 'please fill values'}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="lblPaymentMeth">Payment Method</InputLabel>
            <Select
              labelId="lblPaymentMeth"
              id="txtPaymentMethod"
              value={txtPaymentMethod}
              label="Payment Method"
              name="txtPaymentMethod"
              sx={{ mt: 1 }}
              onChange={handleChange}
            >
              <MenuItem value='Cash'>Cash</MenuItem>
              <MenuItem value='Phone Pe'>Phone Pe</MenuItem>
              <MenuItem value='Google Pe'>Google Pe</MenuItem>
              <MenuItem value='Paytm'>Paytm</MenuItem>
            </Select>
          </FormControl>

          <div className="subTotal">
            <h3>Sub Total: ₹ <b>{subTotal}</b>/-</h3>
            <h3>Tax: ₹ <b>{tax}</b>/-</h3>
            <h2>Total: ₹ <b>{total}</b>/-</h2>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={0}
          justifyContent={"center"}
          mt={2}
        >
          <Button variant="contained" onClick={handleInvoice} disabled={isBtnVisible ? false : true}>
            Generate Invoice
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddEditModal;
