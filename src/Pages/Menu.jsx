import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddEditModal from "../Component/Modal/AddEditModal";
import DeleteModal from "../Component/Modal/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { addMenu, getMenu, updateMenu, deleteMenu } from "../Services/api";
import { Tooltip, IconButton } from "@material-ui/core";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEdit, setEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [isDelete, setDelete] = useState(false);
  const [deleteData, setDeleteData] = useState();
  const [menuData, setMenuData] = useState();

  const handleEdit = (data) => {
    setEdit(true);
    setEditData(data);
  };

  const handleClose = () => {
    setEdit(false);
    setDelete(false);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteMenu(deleteData[0]);
      toast.error("Item Deleted", {
        position: "top-center",
      });
      setDelete(false);
      getMenuData();
    } catch (error) {
      console.log(error);
    }
  };

  const changeObj = (obj) => {
    const [id, itemName, category, price] = obj;
    return {
      id,
      itemName,
      category,
      price,
    };
  };

  const handleAddToCart = (tableMeta, value, updateValue) => {
    dispatch(addToCart({ ...changeObj(tableMeta.rowData), quantity: 1 }));
    // Update localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...storedCartItems, { ...changeObj(tableMeta.rowData), quantity: 1 }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    toast.success("Item Added in cart", { position: "top-center" });
  };

  const addMenuItem = async (payload) => {
    try {
      const result = await addMenu(payload);
      toast.success(result, { position: "top-center" });
      setEdit(false);
      getMenuData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateMenuItem = async (payload) => {
    try {
      const result = await updateMenu(payload, editData[0]);
      if (result !== undefined) {
        toast.success("Menu Updated", { position: "top-center" });
        setEdit(false);
        getMenuData();
      } else {
        toast.error("Menu not updated please connect with dev", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (data) => {
    if (editData !== undefined) {
      updateMenuItem(data);
    } else {
      addMenuItem(data);
    }
  };

  const getMenuData = async () => {
    try {
      const result = await getMenu();
      setMenuData(result);
    } catch (error) {
      console.log(error);
    }
  };

  //get menu data
  useEffect(() => {
    getMenuData();
  }, []);

  const handleAddBtn = () => {
    setEdit(true);
    setEditData();
  };

  const addButton = () => {
    return (
      <Tooltip disableFocusListener title="Add User">
        <IconButton onClick={handleAddBtn}>
          <ControlPointIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const deleteItem = (data) => {
    setDelete(true);
    setDeleteData(data);
  };
  const columns = [
    {
      label: "ID",
      name: "_id",
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
      name: "Update",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <EditIcon
                className="green icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(tableMeta.rowData);
                }}
              >
                Edit
              </EditIcon>
              <DeleteIcon
                className="red icon"
                onClick={(e) => {
                  deleteItem(tableMeta.rowData);
                }}
              >
                Delete
              </DeleteIcon>
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
              <ShoppingCartIcon
                className="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(tableMeta, value, updateValue);
                }}
              >
                Edit
              </ShoppingCartIcon>
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
    filter: false,
    selectableRows: false,
    customToolbar: addButton,
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <MUIDataTable
        title={"Cafe Menu"}
        data={menuData}
        columns={columns}
        handleUpdate
        options={options}
      />
      {isEdit && (
        <AddEditModal
          isEdit={isEdit}
          handleClose={handleClose}
          editData={editData}
          handleUpdate={handleUpdate}
        />
      )}
      {isDelete && (
        <DeleteModal
          isDelete={isDelete}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default Menu;
