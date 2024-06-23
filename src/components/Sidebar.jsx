import { Box, Button, Collapse, Stack } from "@mui/material";
import React, { useState } from "react";
import CollapsibleMenu from "./CollapsibleMenu";
import { menuItems } from "../utils/constants";

const Sidebar = () => {
  const [menus, setMenus] = useState(menuItems);

  const updateMenuState = (index) => {
    setMenus((prevMenus) => {
      const updatedMenus = [...prevMenus];
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
      }}
    >
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
    </Box>
  );
};

export default Sidebar;
