// Board.js
import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js/auto";
import Navbar from '../navbar'

Chart.register(...registerables);

const DashboardCard = ({ company }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      style={{ padding: "20px", backgroundColor: "#2c2c54", color: "white" }}
    >
      <Typography variant="h5">{company.name}</Typography>
      <Typography variant="h6" style={{ marginBottom: "10px" }}>
        Address: {company.address}
      </Typography>
      <Typography variant="body1">EBITDA: ${company.ebitda.toLocaleString()}</Typography>
      <Typography variant="body1">EPS: {company.eps}</Typography>
    </Paper>
  </Grid>
);

const Graph = ({ data }) => (
  <Grid item xs={12} sm={6} md={8}>
    <Paper
      elevation={3}
      style={{ padding: "20px", backgroundColor: "#2c2c54", color: "white" }}
    >
      <Typography variant="h5">Company Performance</Typography>
      <Line data={data} />
    </Paper>
  </Grid>
);

const PieChart = ({ data }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper
      elevation={3}
      style={{ padding: "20px", backgroundColor: "#2c2c54", color: "white" }}
    >
      <Typography variant="h5">Company Distribution</Typography>
      <Pie data={data} />
    </Paper>
  </Grid>
);

function Board({ companies }) {
  const data = {
    labels: companies.map(company => company.name),
    datasets: [
      {
        label: "EBITDA",
        data: companies.map(company => company.ebitda),
        borderColor: "blue",
        fill: false,
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)"
        ],
        hoverBackgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)"
        ]
      }
    ]
  };

  return (
    <div><Navbar/>
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Selected Companies
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company, index) => (
          <DashboardCard key={index} company={company} />
        ))}
        <Graph data={data} />
        <PieChart data={data} />
      </Grid>
    </Container></div>
  );
}

export default Board;
