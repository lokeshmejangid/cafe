import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart


// import React from "react";
// import Modal from "@mui/material/Modal";
// import { Grid, TextField, Button } from "@mui/material";

// const AddEditModal = (props) => {
//   const { isEdit, handleClose, editData, handleUpdate } = props;

//   console.log(editData);
//   const handleSave = () => {
//     handleClose();
//     handleUpdate();
//   };

//   return (
//     <Modal
//       open={isEdit}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       {/* <Grid container spacing={0} className="modal">
//         <Grid item xs={12} justifyContent={"center"}>
//           <TextField
//             id="txtItemName"
//             label="Item Name"
//             variant="outlined"
//             fullWidth
//             value={editData[1]}
//           />
//           <TextField
//             id="txtItemCategory"
//             label="Item Category"
//             variant="outlined"
//             fullWidth
//             sx={{ mt: 1 }}
//             value={editData[2]}
//           />
//           <TextField
//             id="txtItemPrice"
//             label="Item Price"
//             variant="outlined"
//             fullWidth
//             sx={{ mt: 1 }}
//             value={editData[3]}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           container
//           spacing={0}
//           justifyContent={"center"}
//           mt={2}
//         >
//           <Button variant="contained" onClick={handleSave}>
//             Save
//           </Button>
//         </Grid>
//       </Grid> */}
//     </Modal>
//   );
// };

// export default AddEditModal;
