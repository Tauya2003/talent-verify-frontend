import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

const ViewEmployeeDetails = () => {
  const { employee_name } = useParams();
  const { employees } = useContext(MainContext);
  const employee = employees.find(
    (employee) => employee.name === employee_name
  );

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: "48%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            pb: "10px",
            mb: "20px",
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#A2A1A8",
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "22px",
            }}
          >
            Name
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            {employee.name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            pb: "10px",
            mb: "20px",
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#A2A1A8",
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "22px",
            }}
          >
            Department
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            {employee.department}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            pb: "10px",
            mb: "20px",
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#A2A1A8",
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "22px",
            }}
          >
            Employee ID
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            {employee.employee_id}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          width: "48%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            pb: "10px",
            mb: "20px",
            borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#A2A1A8",
              fontFamily: "Lexend, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "22px",
            }}
          >
            Current Role
          </Typography>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            {employee?.roles?.find((role) => role?.current)?.name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewEmployeeDetails;
