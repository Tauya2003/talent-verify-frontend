import { Box } from "@mui/material";
import search from "../assets/icons/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
    }

    setSearchTerm("");
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
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
