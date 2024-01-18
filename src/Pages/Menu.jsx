import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuData from "../Utility/MenuData.json";
import AddEditModal from "../Component/Modal/AddEditModal";
import DeleteModal from "../Component/Modal/DeleteModal";
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";


const Menu = () => {
  const navigate = useNavigate();
  const [isEdit, setEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [isDelete, setDelete] = useState(false);

  const handleEdit = (data) => {
    setEdit(true);
    setEditData(data);
  }

  const handleClose = () => {
    setEdit(false);
    setDelete(false);
  }
  const handleDelete = () => {
    toast.error("Item Deleted", {
      position: "top-center"
    });
  }

  const addToCart = (tableMeta) => {
    console.log(tableMeta.rowData);
    toast.success("Item Added in cart", {
      position: "top-center"
    });

    //navigate('/cart');
  }

  const handleUpdate = () => {
    toast.success("Data Updated", {
      position: "top-center"
    });
  }


  const columns = [
    {
      label: "S. No",
      name: "id",
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
                  handleEdit(tableMeta.rowData)
                }}
              >
                Edit
              </EditIcon>
              <DeleteIcon
                className="red icon"
                onClick={(e) => {
                  setDelete(true)
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
                  addToCart(tableMeta);
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
    selectableRows: false,
  };

  return (
    <>
      <ToastContainer autoClose={1000}/>
      <MUIDataTable
        title={"Cafe Menu"}
        data={MenuData}
        columns={columns}
        options={options}
      />
      {isEdit && (<AddEditModal isEdit={isEdit} handleClose={handleClose} editData={editData} handleUpdate={handleUpdate}/>)}
      {isDelete && (<DeleteModal isDelete={isDelete} handleClose={handleClose} handleDelete={handleDelete} />)}
    </>
  );
};

export default Menu;
;