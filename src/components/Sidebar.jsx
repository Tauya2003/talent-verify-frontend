import { Box, Button, Collapse, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import CollapsibleMenu from "./CollapsibleMenu";
import { menuItems } from "../utils/constants";

const Sidebar = () => {
  const [menus, setMenus] = useState(menuItems);

  const updateMenuState = (index) => {
    setMenus((prevMenus) => {
      const updatedMenus = [...prevMenus];
      let currentmenu = updatedMenus[index];
      updatedMenus.forEach((menu) => {
        if (menu !== currentmenu) {
          menu.isOpen = false;
        }
      });
      updatedMenus[index].isOpen = !prevMenus[index].isOpen;
      return updatedMenus;
    });
  };

  return (
    <Box
      sx={{
        width: "15rem",
        height: "100vh",
        bgcolor: "#f9f9f9",
        p: "4rem 1rem 2rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
      }}
    >
      <span>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            mb: "2rem",
            textAlign: "center",
          }}
        >
          Talent Verify
        </Typography>

        <Stack sx={{ width: "100%" }}>
          {menus.map((item, index) => (
            <CollapsibleMenu
              key={index}
              index={index}
              updateMenuState={updateMenuState}
              {...item}
            />
          ))}
        </Stack>
      </span>

      <Button
        sx={{
          width: "100%",
          color: "#000",
          bgcolor: "#ccc",

          "&:hover": {
            bgcolor: "#ddd",
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
