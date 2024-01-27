import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReceiptModal from "../Component/Modal/ReceiptModal";
import { getAllBills } from "../Services/api";
import Header from "../Component/Header/Header";
import { useSelector } from "react-redux";

const Bills = () => {
  const [isReceipt, setReceipt] = useState(false);
  const [bills, setBills] = useState();
  const [customerBill, setCustomerBill] = useState();
  
  //const { userId } = useSelector((state) => state.saveUserId);
  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user !== undefined && user !== null) userId = user._id;

  const handleClose = () => {
    setReceipt(false);
  };

  const changeObj = (obj) => {
    const [
      _id,
      customerName,
      customerNumber,
      paymentMethod,
      subTotal,
      tax,
      totalAmount,
      cartItems,
      date,
    ] = obj;
    return {
      _id,
      customerName,
      customerNumber,
      paymentMethod,
      subTotal,
      tax,
      totalAmount,
      cartItems,
      date,
    };
  };


  const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return (
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join("-") +
        " " +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(":")
    );
};

  const columns = [
    {
      label: "S.No.",
      name: "_id",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, update) => {
          let rowIndex = Number(tableMeta.rowIndex) + 1;
          return <span>{rowIndex}</span>;
        },
      },
    },
    {
      label: "Customer Name",
      name: "customerName",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span className="itemName">{tableMeta.rowData[1]}</span>
        },
      },
    },
    {
      label: "Contact Number",
      name: "customerNumber",
    },
    {
      label: "Payment Method",
      name: "paymentMethod",
      options: {
        display: false,
      },
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
        display: false,
      },
    },
    {
      label: "Date",
      name: "date",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <span>{formatDate(tableMeta.rowData[8])}</span>
            </>
          );
        },
      },
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
    filter: false,
  };

  const customSort = (data, colIndex, order) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return order === "desc" ? dateB - dateA : dateA - dateB;
    });
  };

  const getBillsData = async () => {
    try {
      const result = await getAllBills(userId);
      setBills(customSort(result, "date", "desc"));
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
      <Header isMenu={true} />
      <MUIDataTable
        title={"Bills"}
        data={bills}
        columns={columns}
        options={options}
      />
      {isReceipt && (
        <ReceiptModal
          isReceipt={isReceipt}
          bill={customerBill}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Bills;
