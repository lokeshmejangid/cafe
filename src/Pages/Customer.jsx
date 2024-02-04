import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { getAllBills } from "../Services/api";
import Header from "../Component/Header/Header";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Customer = () => {
  const location = useLocation();
  const [bills, setBills] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user !== undefined && user !== null) userId = user._id;

  let date;
  if (location.state !== null && location.state !== undefined) {
    date = location.state;
  } else {
    date = undefined;
  }
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
          return <span className="itemName">{tableMeta.rowData[1]}</span>;
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

  const getBillsData = async (payload) => {
    try {
      const result = await getAllBills(payload);
      setBills(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const payload = {
      userId: userId,
      date: date ? date.date : undefined
    };
    getBillsData(payload);
  }, []);

  return (
    <>
      <Header isMenu={true} />
      <div className="goToDashboard">
        <ArrowBackIcon />
        <NavLink to={"/dashboard"}>Go To Dashboard</NavLink>
      </div>
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
