import React from "react";
import Header from "../Component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { Button, Grid, Card, CardContent } from "@mui/material";
import Chart from "../Component/Chart/Chart";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Dashboard = () => {
  const data = [
    { date: "2024-01-27", orders: 50 },
    { date: "2024-01-26", orders: 25 },
    { date: "2024-01-25", orders: 45 },
    { date: "2024-01-24", orders: 25 },
    { date: "2024-01-23", orders: 50 },
    { date: "2024-01-22", orders: 78 },
    { date: "2024-01-21", orders: 11 },
    { date: "2024-01-20", orders: 34 },
    { date: "2024-01-19", orders: 34 },
    { date: "2024-01-18", orders: 66 },
    { date: "2024-01-17", orders: 80 },
    { date: "2024-01-16", orders: 78 },
    { date: "2024-01-15", orders: 65 },
    { date: "2024-01-14", orders: 45 },
    { date: "2024-01-13", orders: 98 },
    { date: "2024-01-12", orders: 90 },
    { date: "2024-01-11", orders: 89 },
    { date: "2024-01-10", orders: 67 },
    { date: "2024-01-09", orders: 55 },
    { date: "2024-01-08", orders: 15 },
    // Add more data for other days
  ];

  return (
    <>
      <Header isMenu={true} />
      <ToastContainer autoClose={1000} />
      <Grid container spacing={0} mt={1} className="dashboard">
        <Grid item xs={3}>
          <div className="dashContent">
            <DashboardIcon />
            <span>Dashboard</span>
          </div>
        </Grid>
        <Grid item xs={9} className="btnContainer">
          <Button variant="contained" className="filterBtn">
            All
          </Button>
          <Button variant="contained" className="filterBtn">
            Today
          </Button>
          <Button variant="contained" className="filterBtn">
            This Week
          </Button>
          <Button variant="contained" className="filterBtn">
            This Month
          </Button>
          <Button variant="contained" className="filterBtn">
            This Year
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={5}
          mt={1}
          className="infoContainer"
        >
          <Grid item xs={3}>
            <Card className="card card-first">
              <CardContent>
                <div className="top">
                  <FilterFramesIcon className="icon" />
                  <span>Total Orders</span>
                </div>
                <div className="mid">₹ 2500/-</div>
                <div className="bottom">
                  <div className="percentage">
                    <ArrowUpwardIcon />5%
                  </div>
                  <span>Since Last Month</span>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className="card card-second">
              <CardContent>Total Item Sold</CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card className="card card-third">
              <CardContent>Average Bill Value</CardContent>
            </Card>
          </Grid>

          <Grid item xs={3}>
            <Card className="card card-four">
              <CardContent>Total Customer</CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div className="chart">
            <Chart data={data} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
