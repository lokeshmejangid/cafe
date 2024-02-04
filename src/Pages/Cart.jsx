import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, deleteFromCart, clearCart } from "../Redux/Actions/index";
import { ToastContainer, toast } from "react-toastify";
import DeleteModal from "../Component/Modal/DeleteModal";
import InvoiceModal from "../Component/Modal/InvoiceModal";
import { Button } from "@mui/material";
import { addCustomerBill } from "../Services/api";
import { addToCart } from "../Redux/Actions";
import Header from "../Component/Header/Header";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDelete, setDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const [invoice, setInvoice] = useState(false);

  const { cartItems, loading } = useSelector((state) => state.addToCartItems);
  //const { userId } = useSelector((state) => state.saveUserId);
  const user = JSON.parse(localStorage.getItem('user'));

  let userId;
  if(user !== undefined && user !== null) userId = user._id;

  const handleClose = () => {
    setDelete(false);
    setInvoice(false);
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(deleteItem));
    toast.error("Item Deleted", {
      position: "top-center",
    });
    // Update localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = storedCartItems.filter(
      (item) => item.id !== deleteItem.id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setSubTotal('0');
  };
  const changeObj = (obj) => {
    const [id, itemName, itemImg, category, price, quantity] = obj;
    return {
      id,
      itemName,
      itemImg,
      category,
      price,
      quantity,
    };
  };

  const handleIncrement = (data) => {
    dispatch(
      updateCart({ ...changeObj(data), quantity: changeObj(data).quantity + 1 })
    );
    // Update localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = storedCartItems.map((item) =>
      item.id === changeObj(data).id
        ? { ...item, quantity: changeObj(data).quantity + 1 }
        : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const handleDecrement = (data) => {
    dispatch(
      updateCart({ ...changeObj(data), quantity: changeObj(data).quantity - 1 })
    );
    // Update localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = storedCartItems.map((item) =>
      item.id === changeObj(data).id
        ? { ...item, quantity: changeObj(data).quantity - 1 }
        : item
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleLblColor = (data) => {
    if(data === 'Food') return <span className="lbl-green">{data}</span>
    return <span className="lbl-yellow">{data}</span>
  }

  const columns = [
    {
      label: "S.No.",
      name: "id",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, update) => {
          let rowIndex = Number(tableMeta.rowIndex) + 1;
          return <span>{rowIndex}</span>;
        },
      },
    },
    {
      label: "Item Name",
      name: "itemName",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span className="itemName">{tableMeta.rowData[1]}</span>
        },
      },
    },
    {
      label: "Item Image",
      name: "itemImg",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <img src={tableMeta.rowData[2]} className="itemImg" alt="Item Image"/>
        },
      },
    },
    {
      label: "Category",
      name: "category",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return handleLblColor(tableMeta.rowData[3]);
        },
      },
    },
    {
      label: "Price",
      name: "price",
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
      name: "Quantity",
      name: "quantity",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="cartIcons">
              <ControlPointIcon
                className=" icon"
                onClick={() => handleIncrement(tableMeta.rowData)}
              />
              <span>{tableMeta.rowData[5]}</span>
              <RemoveCircleOutlineIcon
                className=" icon"
                onClick={() => {
                  if (tableMeta.rowData[5] > 1) {
                    handleDecrement(tableMeta.rowData);
                  }
                }}
              />
            </div>
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
              <DeleteIcon
                className="red icon"
                onClick={(e) => {
                  setDeleteItem(changeObj(tableMeta.rowData));
                  setDelete(true);
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

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => {
      temp = temp + item.price * item.quantity;
      setSubTotal(temp);
    });
  }, [cartItems]);

  const handleInvoice = () => {
    setInvoice(true);
  };

  let interval;
  const navigateOnBill = () => {
    navigate('/bills');
    clearInterval(interval);
  }

  const addBill = async (payload) => {
    try {
      const result = await addCustomerBill(payload);
      setInvoice(false);
      localStorage.removeItem("cartItems");
      dispatch(clearCart());
      setSubTotal(0);
      toast.success(result, { position: "top-center" });

      interval = setInterval(() => {
        navigateOnBill();
      }, 2500);

    } catch (error) {
      console.log(error);
    }
  };

  const handleBills = (data) => {
    //const payload = { ...data, cartItems: cartItems, date: formatDate(new Date()) };
    const payload = { ...data, cartItems: cartItems, date: new Date(), userId: userId };
    addBill(payload);
  };
  return (
    <>
      <Header isMenu={true} />
      <div className="goToDashboard">
        <ArrowBackIcon />
        <NavLink to={'/dashboard'}>Go To Dashboard</NavLink>
      </div>
      <ToastContainer autoClose={1000} />
      <MUIDataTable
        title={"Cart"}
        data={cartItems}
        columns={columns}
        options={options}
      />
      <div className="subTotal">
        <h2>
          Sub Total: <b>{subTotal}</b> /-
        </h2>

        <Button variant="contained" disabled={(cartItems.length === 0) ? true: false} onClick={handleInvoice}>
          Create Invoice
        </Button>
      </div>
      {isDelete && (
        <DeleteModal
          isDelete={isDelete}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      )}

      {invoice && (
        <InvoiceModal
          invoice={invoice}
          subTotal={subTotal}
          handleClose={handleClose}
          handleBills={handleBills}
        />
      )}
    </>
  );
};

export default Cart;
