import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import MUIDataTable from "mui-datatables";
import MenuData from "../Utility/MenuData.json"
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddEditModal from '../Component/Modal/AddEditModal'
import DeleteModal from '../Component/Modal/DeleteModal'
import { ToastContainer, toast } from 'react-toastify';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';

const Menu = () => {

  const [isEdit, setEdit] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [editData, setEditData] = useState();
  const [error, setError] = useState('');

  const handleEdit = (data) => {
    setEdit(true);
    setEditData(data);
  }

  const Validation = () => {
    setError(true);
  }

  const handleClose = () => {
    setEdit(false);
    setDelete(false);
  }
  const addToCart = () => {
    toast('Item Added in Cart');
  }

  const columns = [
    {
      label: "S. No",
      name: "id",
    },
    {
      label: "Item Name",
      name: "ItemName",
    },
    {
      label: "Category",
      name: "Category",
    },
    {
      label: "Price",
      name: "Price",
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
                className="green"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(tableMeta.rowData)
                }
                }
              >
              </EditIcon >
              <DeleteIcon
                className="red"
                onClick={(e) => {
                  setDelete(true)
                }}
              >
              </DeleteIcon>
            </>
          );
        }
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
              <ShoppingCartIcon
                onClick={(e) => { addToCart() }}
              >
              </ShoppingCartIcon>
            </>
          );
        }
      }
    }
  ];

  const addButton = () => {
    return (
      <Tooltip title='Add New Menu'>
        <IconButton onClick={handleEdit}>
          <ControlPointIcon />
        </IconButton>
      </Tooltip>

    )
  }

  const options = {
    filterType: 'checkbox',
    print: 'false',
    download: 'false',
    viewColumns: 'false',
    selectableRows: 'none',
    filter: 'false',
    customToolbar: addButton
  };

  return (
    <>
      <ToastContainer />
      <MUIDataTable
        title={"Cafe Menu"}
        data={MenuData}
        columns={columns}
        options={options}
      />
      {isEdit && (<AddEditModal isEdit={isEdit} editData={editData} handleClose={handleClose} />)}
      {isDelete && (<DeleteModal isDelete={isDelete} handleClose={handleClose} />)}
    </>
  )
}

export default Menu