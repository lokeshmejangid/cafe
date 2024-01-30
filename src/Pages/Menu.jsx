import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddEditModal from "../Component/Modal/AddEditModal";
import DeleteModal from "../Component/Modal/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { addMenu, getMenu, updateMenu, deleteMenu } from "../Services/api";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Header from "../Component/Header/Header";

const Menu = () => {
  const dispatch = useDispatch();
  //const { userId } = useSelector((state) => state.saveUserId);
  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user !== undefined && user !== null) userId = user._id;

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
    const [id, itemName, itemImg, category, price] = obj;
    return {
      id,
      itemName,
      itemImg,
      category,
      price,
    };
  };

  const handleAddToCart = (tableMeta, value, updateValue) => {
    dispatch(addToCart({ ...changeObj(tableMeta.rowData), quantity: 1 }));
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [
      ...storedCartItems,
      { ...changeObj(tableMeta.rowData), quantity: 1 },
    ];
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
      const result = await getMenu(userId);
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
  const handleLblColor = (data) => {
    if (data === "Drinks") return <span className="lbl-green">{data}</span>;
    else if (data === "Food") return <span className="lbl-red">{data}</span>;
    return <span className="lbl-yellow">{data}</span>;
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
      label: "Item Name",
      name: "itemName",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span className="itemName">{tableMeta.rowData[1]}</span>;
        },
      },
    },
    {
      label: "Item Image",
      name: "itemImg",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <img
              src={tableMeta.rowData[2]}
              className="itemImg"
              alt="Item Image"
            />
          );
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
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>₹{tableMeta.rowData[4]} /-</span>;
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
      <Header isMenu={true} />
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
