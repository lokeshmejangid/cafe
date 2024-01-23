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
const Cart = () => {
  const dispatch = useDispatch();

  const [isDelete, setDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const [invoice, setInvoice] = useState(false);

  const { cartItems, loading } = useSelector((state) => state.addToCartItems);

  console.log(cartItems);
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
  };
  const changeObj = (obj) => {
    const [id, itemName, category, price, quantity] = obj;
    return {
      id,
      itemName,
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

  const columns = [
    {
      label: "ID",
      name: "id",
      options: {
        display: false,
      },
    },
    {
      label: "Item Name",
      name: "itemName",
    },
    {
      label: "Category",
      name: "category",
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
              <span>₹{tableMeta.rowData[3]} /-</span>
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
              <span>{tableMeta.rowData[4]}</span>
              <RemoveCircleOutlineIcon
                className=" icon"
                onClick={() => {
                  if (tableMeta.rowData[4] > 1) {
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

  const addBill = async (payload) => {
    try {
      const result = await addCustomerBill(payload);
      setInvoice(false);
      localStorage.removeItem("cartItems");
      dispatch(clearCart());
      setSubTotal(0);
      toast.success(result, { position: "top-center" });

    } catch (error) {
      console.log(error);
    }
  };

  const handleBills = (data) => {
    const payload = { ...data, cartItems: cartItems };
    addBill(payload);
  };
  return (
    <>
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

        <Button variant="contained" onClick={handleInvoice}>
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
