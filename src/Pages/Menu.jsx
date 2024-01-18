import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import MUIDataTable from "mui-datatables";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = () => {

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
                  window.alert('EDIT')
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


  const data = [
    ["1","Tea", "Drink", "10"],
    ["2","Coffie", "Drink", "20"],
    ["3","Pizza", "Food", "50"],
    ["4","Burger", "Food", "30"],
    ["5","Soda", "Drink", "40"],

  ];



  const options = {
    filterType: 'checkbox',
    print	: 'false',
    download:'false',
    viewColumns	:'false',
    selectableRows :'none',
  };



  return (
    <>
      <MUIDataTable
      title={"Menu"}
      data={data}
      columns={columns}
      options={options}
    />

    </>
  )
}

export default Menu