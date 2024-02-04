import "../Dashboard.css";
import React, { useEffect, useState } from "react";
import Header from "../Component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { Button, Grid, Card, CardContent } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { NavLink } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { FaFirstOrderAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Chart from "../Component/Chart";
import { getUserInfo } from "../Services/api";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Dashboard = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));

  const [isSelected, setSelected] = useState("All Records");
  const [billInfo, setBillInfo] = useState();
  const [filterDate, setFilterDate] = useState();

  const user = JSON.parse(localStorage.getItem("user"));
  let userId;
  if (user !== undefined && user !== null) userId = user._id;
  let payload = null;
  let date = null;

  const calculateStartDateOfWeek = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    return startOfWeek;
  };

  const calculateStartDateOfMonth = () => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return startOfMonth;
  };

  const calculateStartDateOfYear = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    return startOfYear;
  };

  const handleFilter = (data) => {
    if (data === "Today") {
      setSelected("Today");
      date = new Date();
      date.setHours(0, 0, 0, 0);
    } else if (data === "This Week") {
      setSelected("This Week");
      date = calculateStartDateOfWeek();
    } else if (data === "This Month") {
      setSelected("This Month");
      date = calculateStartDateOfMonth();
    } else if (data === "This Year") {
      setSelected("This Year");
      date = calculateStartDateOfYear();
    } else if (data === "All Records") {
      setSelected("All Records");
      date = null;
    }
    setFilterDate(date);
    payload = {
      userId: userId,
      selectedDate: date,
    };
    console.log(date);
    getUser(payload);
  };

  const getUser = async (payload) => {
    try {
      const result = await getUserInfo(payload);
      setBillInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    payload = {
      userId: userId,
      selectedDate: null,
    };
    getUser(payload);
  }, []);

  return (
    <>
      <Header isMenu={true} />
      <ToastContainer autoClose={1000} />
      <Grid container spacing={0} mt={1} className={`dashboard ${xs && 'p-10'}`}>
        <Grid item xs={12} sm={3}>
          <div className="dashContent">
            <DashboardIcon />
            <span>Dashboard</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={9} className={`btnContainer ${!xs && 'justify-end'}`}>
          <div
            className={`filterBtn ${isSelected === "Today" && 'active'} ${xs && 'filterBtnXs'}`}
            onClick={() => handleFilter("Today")}
          >
            Today
          </div>
          <div
            className={`filterBtn ${isSelected === "This Week" && 'active'} ${xs && 'filterBtnXs'}`}
            onClick={() => handleFilter("This Week")}
          >
            This Week
          </div>
          <div
            className={`filterBtn ${isSelected === "This Month" && 'active'} ${xs && 'filterBtnXs'}`}
            onClick={() => handleFilter("This Month")}
          >
            This Month
          </div>
          <div
            className={`filterBtn ${isSelected === "This Year" && 'active'} ${xs && 'filterBtnXs'}`}
            onClick={() => handleFilter("This Year")}
          >
            This Year
          </div>
          <div
            className={`filterBtn ${isSelected === "All Records" && 'active'} ${xs && 'filterBtnXs'}`}
            onClick={() => handleFilter("All Records")}
          >
            All
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={xs ? 0 : 5}
          mt={1}
          className="infoContainer"
        >
          <Grid item xs={12} sm={3}>
            <Card className="card card-first">
              <CardContent>
                <div className="top">
                  <div>
                    <FaHeart className="icon" />
                    <span>Total Orders Value</span>
                  </div>
                  <NavLink to="/bills" state={{ date: filterDate }}>
                    Sell All
                  </NavLink>
                </div>
                <div className="mid">
                  ₹ {billInfo ? Math.round(billInfo.totalAmountSum) : 0}/-
                </div>
                <div className="bottom">
                  <span>{isSelected}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="card card-second">
              <CardContent>
                <div className="top">
                  <div>
                    <FaMoneyBill className="icon" />
                    <span>Average Orders Value</span>
                  </div>
                  <NavLink to="/bills" state={{ date: filterDate }}>
                    Sell All
                  </NavLink>
                </div>
                <div className="mid">
                  ₹ {billInfo ? Math.round(billInfo.averageBillValue) : 0}/-
                </div>
                <div className="bottom">
                  <span>{isSelected}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card card-third">
              <CardContent>
                <div className="top">
                  <div>
                    <FaFirstOrderAlt className="icon" />
                    <span>Total Orders Count</span>
                  </div>
                  <NavLink to="/bills" state={{ date: filterDate }}>
                    Sell All
                  </NavLink>
                </div>
                <div className="mid">
                  {billInfo ? Math.round(billInfo.orderCount) : 0}
                </div>
                <div className="bottom">
                  <span>{isSelected}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card card-four">
              <CardContent>
                <div className="top">
                  <div>
                    <FaHouseUser className="icon" />
                    <span>Total Customer</span>
                  </div>
                  <NavLink to="/customer" state={{ date: filterDate }}>
                    Sell All
                  </NavLink>
                </div>
                <div className="mid">
                  {billInfo ? Math.round(billInfo.customerCount) : 0}
                </div>
                <div className="bottom">
                  <span>{isSelected}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={xs ? 1 : 5}>
          <div className="chart">
            <Chart
              chartData={billInfo !== undefined ? billInfo.chartData : []}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
