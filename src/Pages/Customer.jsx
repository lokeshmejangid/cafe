import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { getAllBills } from "../Services/api";
import Header from "../Component/Header/Header";

const Customer = () => {
  const [bills, setBills] = useState();
  const user = JSON.parse(localStorage.getItem('user'));
  let userId;
  if(user !== undefined && user !== null) userId = user._id;
  const columns = [
    {
      label: "S. No",
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
      label: "Customer Name",
      name: "customerName",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span className="itemName">{tableMeta.rowData[1]}</span>
        },
      },
    },
    {
      label: "Contact Number",
      name: "customerNumber",
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

  const getBillsData = async () => {
    try {
      const result = await getAllBills(userId);
      setBills(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBillsData();
  }, []);

  return (
    <>
    <Header isMenu={true} />
      <MUIDataTable
        title={"Customer Details"}
        data={bills}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Customer;
