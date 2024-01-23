import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import CustomerData from "../Utility/Customer.json";

const Customer = () => {
  const [isDelete, setDelete] = useState(false);
  const columns = [
    {
      label: "S. No",
      name: "id",
    },
    {
      label: "Customer Name",
      name: "custName",
    },
    {
      label: "Contact Number",
      name: "contNo",
    }
  ];

  const options = {
    filterType: "checkbox",
    print: "false",
    download: "false",
    viewColumns: "false",
    selectableRows: false,
    filter: false
  };

  return (
    <>
      <MUIDataTable
        title={"Customer Details"}
        data={CustomerData}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Customer