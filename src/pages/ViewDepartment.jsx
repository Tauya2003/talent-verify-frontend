import { Box, Button, Stack } from "@mui/material";
import Search from "../components/Search";
import filter from "../assets/icons/filter.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import DepartmentTable from "../components/DepartmentTable";

const ViewDepartment = () => {
  const navigate = useNavigate();
  const { employees } = useContext(MainContext);
  const { department_name } = useParams();

  const dep_employees = employees.filter(
    (employee) => employee.department === department_name
  );

  return (
    <Box
      sx={{
        flex: 1,
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
      }}
    >
      <Stack mb={"30px"} direction={"row"} gap={"20px"}>
        <Search />

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
            ml: "auto",

            "&:hover": {
              bgcolor: "rgba(162, 161, 168, 0.10)",
            },
          }}
        >
          Filter
        </Button>
      </Stack>

      <DepartmentTable employees={dep_employees} />
    </Box>
  );
};

export default ViewDepartment;
