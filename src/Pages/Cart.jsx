import React from 'react'
import MUIDataTable from "mui-datatables";
import MenuData from "../Utility/MenuData.json"
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Cart = () => {

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
      label: "Price",
      name: "Price",
    },
    {
      label: "Quantity",
      name: "Quantity",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <ControlPointIcon
                onClick={(e) => { }}
              >
              </ControlPointIcon>
              <RemoveCircleOutlineIcon
                onClick={(e) => { }}
              >
              </RemoveCircleOutlineIcon>
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
              <DeleteIcon
                className='red'
                onClick={(e) => { }}
              >
                Edit
              </DeleteIcon>
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
    filter: 'false'
  };

  return (
    <>
      <MUIDataTable
        title={"Cart"}
        data={MenuData}
        columns={columns}
        options={options}
      />
    </>
  )
}

export default Cart