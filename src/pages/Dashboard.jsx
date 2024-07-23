import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import users from "../assets/icons/users.svg";
import Navbar from "../components/Navbar";
import MainContext from "../context/MainContext";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const { company } = useContext(MainContext);
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
    <Box sx={{ py: "15px", pr: "10px", flex: 1 }}>
      <Navbar />

      {/* Company name start */}
      <Box
        sx={{
          width: "100%",
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
                {company?.name}
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
                {company?.registration_date}
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

      {/* Company details start */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* total employees */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Total Employee
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.num_employees}
            </Typography>
          </Box>
        </Box>

        {/* total departments */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Total Departments
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.departments?.length}
            </Typography>
          </Box>
        </Box>

        {/* Comapany reg number */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Company Reg Number
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "24px",
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.registration_number}
            </Typography>
          </Box>
        </Box>

        {/* Address*/}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Address
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "40px",
                width: "100%",
                ml: "10px",
              }}
            >
              {company?.address}
            </Typography>
          </Box>
        </Box>

        {/* Contact Person */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Contact Person
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.contact_person}
            </Typography>
          </Box>
        </Box>

        {/* email */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Email
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "18px",
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.email}
            </Typography>
          </Box>
        </Box>

        {/* Contact Number */}
        <Box
          sx={{
            width: "32%",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            mt: "20px",
            pb: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
              px: "16px",
              pt: "16px",
              pb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  bgcolor: "rgba(113, 82, 243, 0.05)",
                }}
              >
                <img src={users} alt="users" />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: "22px",
                }}
              >
                Contact Number
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "24px",
                lineHeight: "40px",
                ml: "10px",
              }}
            >
              {company?.phone}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Company details end */}
    </Box>
  );
};

export default Dashboard;
