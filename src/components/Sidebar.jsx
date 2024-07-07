import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import hrms from "../assets/hrms.svg";
import { menuItems } from "../utils/constants.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const handleClick = (index, link) => {
    setActive(index);
    navigate(link);
  };

  return (
    <Box
      sx={{
        width: "280px",
        height: "100%",
        bgcolor: "rgba(162, 161, 168, 0.05)",
        borderRadius: "20px",
        padding: "35px 30px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"8px"} mb={"35px"}>
        <Box
          sx={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            bgcolor: "#8D75F5",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "20px" }} />
        </Box>

        <img src={hrms} alt="hrms logo" />
      </Stack>

      <Stack gap={"10px"}>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            onClick={() => handleClick(index, item.link)}
            startIcon={<img src={item.icon} alt={item.name} />}
            sx={{
              display: "flex",
              height: "50px",
              justifyContent: "start",
              px: "20px",
              color: active === index ? "#7152F3" : "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: active === index ? 600 : 300,
              lineHeight: "24px",
              textTransform: "none",
              gap: "16px",
              borderLeft: "3px solid",
              borderColor: active === index ? "#7152F3" : "transparent",
              borderRadius: "0px 10px 10px 0px",
              transition: "0.3s all",
              bgcolor: active === index ? "rgba(113, 82, 243, 0.05)" : "",

              "&:hover": {
                bgcolor: "rgba(113, 82, 243, 0.05)",
                borderLeft: "3px solid #7152F390",
                color: "#7152F3",
              },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
