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
      }}
    >
      <Sidebar />

      <Outlet />
    </Box>
  );
};

export default Home;
