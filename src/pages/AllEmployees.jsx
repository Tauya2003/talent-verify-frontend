import { Box, Button, Stack } from "@mui/material";
import Search from "../components/Search";
import add from "../assets/icons/add.svg";
import filter from "../assets/icons/filter.svg";
import { useNavigate } from "react-router-dom";
import EmployeesTable from "../components/EmployeesTable";
import { useContext } from "react";
import MainContext from "../context/MainContext";

const AllEmployees = () => {
  const navigate = useNavigate();
  const { employees } = useContext(MainContext);

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
        <Search />

        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button
            onClick={() => navigate("add-new-employee")}
            startIcon={<img src={add} alt="add" />}
            sx={{
              color: "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              display: "flex",
              gap: "10px",
              padding: "13px 20px",
              borderRadius: "10px",
              bgcolor: "#7152F3",
              textTransform: "capitalize",
              transition: "all 0.3s",

              "&:hover": {
                bgcolor: "#7152F3",
                opacity: "0.8",
              },
            }}
          >
            Add New Employee
          </Button>

          <Button
            startIcon={<img src={filter} alt="filter" />}
            sx={{
              color: "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              display: "flex",
              gap: "10px",
              padding: "13px 20px",
              borderRadius: "10px",
              border: "1px solid rgba(162, 161, 168, 0.20)",
              textTransform: "capitalize",
              transition: "all 0.3s",

              "&:hover": {
                bgcolor: "rgba(162, 161, 168, 0.10)",
              },
            }}
          >
            Filter
          </Button>
        </Box>
      </Stack>

      <EmployeesTable employees={employees} />
    </Box>
  );
};

export default AllEmployees;
