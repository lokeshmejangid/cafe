import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuData from "../Utility/MenuData.json";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Cart = () => {
  const [isDelete, setDelete] = useState(false);
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
            <div className="cartIcons">
              <ControlPointIcon
                className=" icon"
                onClick={(e) => {
                  setDelete(true);
                }}
              />
              <span>1</span>
              <RemoveCircleOutlineIcon
                className=" icon"
                onClick={(e) => {
                  setDelete(true);
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
  );
};

export default Cart;
