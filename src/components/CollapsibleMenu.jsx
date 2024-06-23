import { Button, Collapse } from "@mui/material";
import React from "react";

const CollapsibleMenu = ({ index, name, items, isOpen, updateMenuState }) => {
  return (
    <div>
      <Button
        onClick={() => updateMenuState(index)}
        sx={{
          textTransform: "capitalize",
          color: "#000",
          fontWeight: 700,
          justifyContent: "flex-start",
        }}
      >
        {name}
      </Button>

      <Collapse in={isOpen}>
        {items.map((item, index) => (
          <Button
            key={index}
            startIcon={item?.icon}
            sx={{
              textTransform: "capitalize",
              color: "#444",
              width: "100%",
              fontSize: ".75rem",
              justifyContent: "flex-start",
              pl: 3,

              "&:hover": {
                bgcolor: "transparent",
                color: "hsl(0, 0%, 8%)",
              },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Collapse>
    </div>
  );
};

export default CollapsibleMenu;
