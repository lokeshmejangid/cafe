import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { getAllBills } from "../Services/api";

const Customer = () => {
  const [bills, setBills] = useState();
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
      const result = await getAllBills();
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
