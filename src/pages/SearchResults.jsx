import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";
import EmployeesTable from "../components/EmployeesTable";

const SearchResults = () => {
  const { search_term } = useParams();
  const { employees } = useContext(MainContext);

  const searchResults = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search_term.toLowerCase()) ||
      employee.department.toLowerCase().includes(search_term.toLowerCase())
    );
  });

  if (searchResults.length === 0) {
    return (
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
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"30px"}
        >
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: "24px",
              color: "#FFF",
            }}
          >
            No search results found for <em>{search_term}</em>
          </Typography>
        </Stack>
      </Box>
    );
  }

  return (
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
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={"30px"}
      >
        <Typography
          sx={{
            fontFamily: "Lexend, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
            lineHeight: "24px",
            color: "#FFF",
          }}
        >
          Search Results for <em>{search_term}</em>
        </Typography>
      </Stack>

      <EmployeesTable employees={searchResults} />
    </Box>
  );
};

export default SearchResults;
