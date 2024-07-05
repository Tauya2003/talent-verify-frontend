import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import search from "../assets/icons/search.svg";
import notifications from "../assets/icons/notifications.svg";
import users from "../assets/icons/users.svg";
import { Edit } from "@mui/icons-material";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <Box sx={{ py: "15px", pr: "10px", flex: 1 }}>
      <Navbar />

      {/* Company name start */}
      <Box
        sx={{
          width: "640px",
          height: "120px",
          borderRadius: "10px",
          border: "1px solid rgba(162, 161, 168, 0.20)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "96px",
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            px: "36px",
            pt: "29px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "24px",
            }}
          >
            <Box
              sx={{
                width: "52px",
                height: "52px",
                display: "grid",
                placeItems: "center",
                borderRadius: "10px",
                bgcolor: "rgba(113, 82, 243, 0.05)",
              }}
            >
              <img src={users} alt="users" />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "30px",
                  fontWeight: 600,
                  lineHeight: "40px",
                  color: "#fff",
                }}
              >
                Company Name
              </Typography>

              <Typography
                sx={{
                  color: "#6E7191",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  lineHeight: "18px",
                }}
              >
                Date Registered
              </Typography>
            </Box>
          </Box>

          {/* <IconButton
            sx={{
              color: "#30BE82",
              fontFamily: '"Lexend", sans-serif',
              fontSize: "1px",
              fontWeight: 300,
              lineHeight: "16px",
              textTransform: "capitalize",
              display: "flex",
              gap: "5px",
              p: "5px",
              minWidth: "10px",
              borderRadius: "5px",
              // bgcolor: "rgba(48, 190, 130, 0.10)",
            }}
          >
            <Edit />
          </IconButton> */}
        </Box>
      </Box>
      {/* Company name end */}
    </Box>
  );
};

export default Dashboard;
