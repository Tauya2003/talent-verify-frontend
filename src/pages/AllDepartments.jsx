import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Search from "../components/Search";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import right from "../assets/icons/right.svg";
import add from "../assets/icons/add.svg";

const AllDepartments = () => {
  const navigate = useNavigate();
  const { departments, employees } = useContext(MainContext);

  return (
    <Box
      sx={{
        flex: 1,
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
      }}
    >
      <Stack mb={"30px"} direction={"row"}>
        <Search />

        <Button
          onClick={() => navigate("add-new")}
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
            ml: "auto",

            "&:hover": {
              bgcolor: "#7152F3",
              opacity: "0.8",
            },
          }}
        >
          Add New Department
        </Button>
      </Stack>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {departments.map((department, index) => (
          <Box
            key={index}
            sx={{
              p: "20px",
              borderRadius: "10px",
              border: "1px solid rgba(162, 161, 168, 0.20)",
              width: "calc(50% - 10px)",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
                pb: "10px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "30px",
                  }}
                >
                  {department.name + " Department"}
                </Typography>
                <Typography
                  sx={{
                    color: "#A2A1A8",
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: "22px",
                  }}
                >
                  {employees.filter(
                    (employee) => employee.department === department.name
                  ).length + " Members"}
                </Typography>
              </Box>

              <Link
                to={`/departments/${department.name}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: "#7152F3",
                    fontFamily: "Lexend, sans-serif",
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "24px",

                    "&:hover": { opacity: 0.9, textDecoration: "underline" },
                  }}
                >
                  View All
                </Typography>
              </Link>
            </Stack>

            <Stack direction={"column"} mt={"20px"} gap={"18px"}>
              {employees
                .filter((employee) => employee.department === department.name)
                .slice(0, 5)
                .map((employee, index) => (
                  <Stack
                    key={index}
                    gap={"10px"}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Avatar sx={{ width: "40px", height: "40px" }} />

                    <Box>
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

                      <Typography
                        sx={{
                          color: "#A2A1A8",
                          fontFamily: "Lexend, sans-serif",
                          fontSize: "12px",
                          fontWeight: 300,
                          lineHeight: "18px",
                        }}
                      >
                        {
                          employee.roles.find((employee) => employee.current)
                            .name
                        }
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={() => navigate(`/employees/${employee.name}`)}
                      sx={{ ml: "auto" }}
                    >
                      <img src={right} alt="direction right" />
                    </IconButton>
                  </Stack>
                ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AllDepartments;
