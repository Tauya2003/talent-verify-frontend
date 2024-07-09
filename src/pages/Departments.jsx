import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Departments = () => {
  return (
    <Box
      sx={{
        py: "15px",
        pr: "10px",
        flex: 1,
        overflow: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Navbar />

      <Outlet />
    </Box>
  );
};

export default Departments;
