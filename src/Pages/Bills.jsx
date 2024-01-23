import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReceiptModal from "../Component/Modal/ReceiptModal";
import { getAllBills } from "../Services/api";
const Bills = () => {
  const [isReceipt, setReceipt] = useState(false);
  const [bills, setBills] = useState();
  const [customerBill, setCustomerBill] = useState();

  const handleClose = () => {
    setReceipt(false);
  }

  const changeObj = (obj) => {
    const [_id, customerName, customerNumber, paymentMethod, subTotal, tax, totalAmount, cartItems] = obj;
    return {
      _id,
      customerName,
      customerNumber,
      paymentMethod,
      subTotal,
      tax,
      totalAmount,
      cartItems
    };
  };

  const columns = [
    {
      label: "id",
      name: "_id",
      options: {
        display: false
      }
    },
    {
      label: "Customer Name",
      name: "customerName",
    },
    {
      label: "Contact Number",
      name: "customerNumber",
    },
    {
      label: "Payment Method",
      name: "paymentMethod",
      options: {
        display: false
      }
    },
    {
      label: "Sub Total",
      name: "subTotal",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <span>₹{tableMeta.rowData[4]} /-</span>
            </>
          );
        },
      },
    },
    {
      label: "Tax",
      name: "tax",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <span>₹{tableMeta.rowData[5]} /-</span>
            </>
          );
        },
      },
    },

    {
      label: "Total Amount",
      name: "totalAmount",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <span>₹{tableMeta.rowData[6]} /-</span>
            </>
          );
        },
      },
    },
    {
      label: "Cart Items",
      name: "cartItems",
      options: {
        display: false
      }
    },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <ReceiptIcon
                className=" icon"
                onClick={(e) => {
                  setReceipt(true);
                  console.log(tableMeta.rowData);
                  setCustomerBill(changeObj(tableMeta.rowData));
                  
                }}
              />
            </>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    print: "false",
    download: "false",
    viewColumns: "false",
    selectableRows: false,
    filter:false
  };

  const getBillsData = async () => {
    try {
      const result = await getAllBills();
      console.log(result);
      setBills(result);
    } catch (error) {
      console.log(error);
    }
  };

  //get menu data
  useEffect(() => {
    getBillsData();
  }, []);

  return (
    <>
      <MUIDataTable
        title={"Bills"}
        data={bills}
        columns={columns}
        options={options}
      />
      {isReceipt && (<ReceiptModal isReceipt={isReceipt} bill={customerBill} handleClose={handleClose}/>)}
    </>
  );
};

export default Bills