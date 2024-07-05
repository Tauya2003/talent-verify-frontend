import { Box } from "@mui/material";
import search from "../assets/icons/search.svg";

const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "261px",
        padding: "13px 16px",
        gap: "10px",
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.10)",
      }}
    >
      <img src={search} alt="search" />
      <input
        type="text"
        placeholder="Search..."
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
          color: "#fff",
          fontFamily: "Lexend, sans-serif",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: "21px",
          width: "100%",
        }}
      />
    </Box>
  );
};

export default Search;
