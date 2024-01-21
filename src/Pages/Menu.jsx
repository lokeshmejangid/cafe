import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import MUIDataTable from "mui-datatables";
import MenuData from "../Utility/MenuData.json"
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddEditModal from '../Component/Modal/AddEditModal'

const Menu = () => {

  const [isEdit, setEdit] = useState(false);
  const [editData, setEditData] = useState();

  const handleEdit = (data) => {
    setEdit(true);
    setEditData(data);
  }

  const handleClose = () => {
    setEdit(false);
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
                Edit
              </EditIcon >
              <DeleteIcon
                className="red"
                onClick={(e) => {
                  const { data } = this.state;
                  data.shift();
                  this.setState({ data });
                }}
              >
                Delete
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
                onClick={(e) => {
                  e.stopPropagation();
                  window.alert("EDIT");
                }}
              >
                Edit
              </ShoppingCartIcon>
            </>
          );
        }
      }
    }
  ];

  const options = {
    filterType: 'checkbox',
    print: 'false',
    download: 'false',
    viewColumns: 'false',
    selectableRows: 'none',
  };

  return (
    <>
      <MUIDataTable
        title={"Menu"}
        data={MenuData}
        columns={columns}
        options={options}
      />
      {isEdit && (<AddEditModal isEdit={isEdit} handleClose={handleClose}/>)}
    </>
  )
}

export default Menu