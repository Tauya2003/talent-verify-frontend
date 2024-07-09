import { Box, Breadcrumbs, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import notifications from "../assets/icons/notifications.svg";
import { Edit, NavigateNext } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const location = useLocation();
  const [isDashboard, setIsDashboard] = useState(false);
  const [heading, setHeading] = useState("All Employees");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }

    if (location.pathname.includes("employees")) {
      setHeading("All Employees");
    } else if (location.pathname.includes("departments")) {
      setHeading("All Departments");
    }
  }, [location.pathname]);

  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return index === pathSegments.length - 1 ? (
      <Typography
        key={href}
        sx={{
          color: "#6E7191",
          fontFamily: "Lexend, sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: "21px",
          textTransform: "capitalize",
        }}
      >
        {segment}
      </Typography>
    ) : (
      <Link
        key={href}
        style={{
          textDecoration: "none",
        }}
        to={href}
      >
        <Typography
          sx={{
            color: "#6E719199",
            fontFamily: "Lexend, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "21px",
            textTransform: "capitalize",

            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {segment}
        </Typography>
      </Link>
    );
  });

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      mb={"20px"}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Lexend, sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "30px",
            textTransform: "capitalize",
          }}
        >
          {isDashboard ? "Hello " + user.username + " 👋🏻" : heading}
        </Typography>

        {isDashboard ? (
          <Typography
            sx={{
              color: "#6E7191",
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "21px",
            }}
          >
            Good Morning!
          </Typography>
        ) : (
          <Breadcrumbs
            separator={
              <NavigateNext sx={{ color: "#6E7191" }} fontSize="small" />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        )}
      </Box>

      <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
        <Search />

        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            bgcolor: "rgba(162, 161, 168, 0.10)",
          }}
        >
          <img src={notifications} alt="notifications" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
