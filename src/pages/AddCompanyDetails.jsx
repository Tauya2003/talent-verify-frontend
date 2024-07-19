import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const AddCompanyDetails = () => {
  const location = useLocation();
  const [cinfo, setCinfo] = useState(false);

  useEffect(() => {
    if (location.pathname === "/add-company-details") {
      setCinfo(true);
    } else {
      setCinfo(false);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ py: "15px", pr: "10px", flex: 1 }}>
      <Navbar />
      <Box
        sx={{
          flex: 1,
          borderRadius: "10px",
          border: "1px solid rgba(162, 161, 168, 0.20)",
          p: "20px",
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            mb: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lexend, sans-sarif",
              fontSize: "14px",
              color: cinfo && "#7152F3",
              fontWeight: cinfo ? 600 : 300,
              lineHeight: "150%",
              pb: "5px",
              borderBottom: "3px solid",
              borderColor: cinfo ? "#7152F3" : "transparent",
              transition: "all 0.3s",
            }}
          >
            Company Information
          </Typography>

          <Typography
            sx={{
              fontFamily: "Lexend, sans-sarif",
              color: !cinfo && "#7152F3",
              fontSize: "14px",
              fontWeight: !cinfo ? 600 : 3300,
              lineHeight: "150%",
              pb: "5px",
              borderBottom: "3px solid",
              borderColor: cinfo ? "transparent" : "#7152F3",
              transition: "all 0.3s",
            }}
          >
            Departments
          </Typography>
        </Stack>

        <Outlet />
      </Box>
    </Box>
  );
};

export default AddCompanyDetails;
