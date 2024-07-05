import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#16151C",
        padding: "20px",
        display: "flex",
        gap: "30px",
      }}
    >
      <Sidebar />

      <Outlet />
    </Box>
  );
};

export default Home;
