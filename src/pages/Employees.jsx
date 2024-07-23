import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import MainContext from "../context/MainContext";

const Employees = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { departments } = useContext(MainContext);

  if (user.company === "") {
    return (
      <Navigate to="/add-company-details" state={{ from: location }} replace />
    );
  } else if (departments?.length <= 0) {
    return (
      <Navigate
        to="/add-company-details/departments"
        state={{ from: location }}
        replace
      />
    );
  }

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

export default Employees;
