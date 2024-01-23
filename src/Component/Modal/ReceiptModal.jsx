import React, { useRef } from "react";
import Modal from "@mui/material/Modal";
import { Grid, Button } from "@mui/material";
import { useReactToPrint } from "react-to-print";

const ReceiptModal = (props) => {
  const { isReceipt, bill, handleClose } = props;
  const componentRef = useRef();

  console.log(bill);
  const handleDeleteAndClose = () => {
    handleClose();
  };

  const handleBill = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Modal
      open={isReceipt}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container spacing={0} className="modal" justifyContent={"center"}>
        <Grid
        className="invoice-bill"
          container
          spacing={0}
          justifyContent={"center"}
          ref={componentRef}
        >
          <div className="logo">
            <img src="./assets/images/logo.png" alt="logo" height='100px' width= '100px'/>
          </div>
          <Grid item xs={12} className="companyName">
            <span>Coffea</span>
          </Grid>

          <Grid item xs={12} className="description">
            Contact: 9784477117 | Jaipur, Rajasthan
          </Grid>

          <Grid item xs={12} container spacing={0} sx={{ mt: 4 }}>
            <Grid item xs={6}>
              Customer Name:
            </Grid>
            <Grid item xs={6}>
              <b>{bill.customerName}</b>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={0} mt={1}>
            <Grid item xs={6}>
              Contact Number:
            </Grid>
            <Grid item xs={6}>
              <b>{bill.customerNumber}</b>
            </Grid>
          </Grid>

          <Grid item xs={12} container spacing={0} mt={1}>
            <Grid item xs={6}>
              Payment Method:
            </Grid>
            <Grid item xs={6}>
              <b>{bill.paymentMethod}</b>
            </Grid>
          </Grid>

          <table className="table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {bill.cartItems.map((item) => {
                return (
                  <tr key={item._id} className="table-row">
                    <td>
                      <span>{item.itemName}</span>
                    </td>
                    <td>
                      <span>{item.quantity}</span>
                    </td>
                    <td>
                      <span>{item.price}</span>
                    </td>
                    <td>
                      <span>{item.quantity * item.price}</span>
                    </td>
                  </tr>
                );
              })}
              <tr className="table-cal">
                <td />
                <td />
                <td>
                  <h4>tax</h4>
                </td>
                <td>
                  <h4>₹ {bill.tax}</h4>
                </td>
              </tr>
              <tr className="table-cal">
                <td />
                <td />
                <td>
                  <h3>Total Amount</h3>
                </td>
                <td>
                  <h3>
                    <b>₹ {bill.totalAmount}</b>
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>
              <strong>Thank you for your order!</strong> <br />
              10% GST application on total amount.Please note that this is non
              refundable amount for any assistance please write email
              <b> lokeshjagnid.me@gmail.com</b>
            </p>
          </div>
        </Grid>
        <Button variant="contained" sx={{ mt: 5 }} onClick={handleBill}>
          Generate Bill
        </Button>
      </Grid>
    </Modal>
  );
};

export default ReceiptModal;
