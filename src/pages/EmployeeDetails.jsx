import { useContext, useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import MainContext from "../context/MainContext";
import camera from "../assets/icons/camera.svg";
import briefcase from "../assets/icons/briefcase.svg";
import gmail from "../assets/icons/gmail.svg";
import edit2 from "../assets/icons/edit2.svg";
import user from "../assets/icons/user.svg";
import file from "../assets/icons/file.svg";

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("profile");
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
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          pb: "30px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
        }}
      >
        <Box display={"flex"} gap={"16px"}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              flexShrink: 0,
              borderRadius: "10px",
              border: "1px dashed rgba(162, 161, 168, 0.20)",
              bgcolor: "rgba(162, 161, 168, 0.05)",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img src={camera} alt="camera" />
          </Box>

          <Stack gap={"8px"}>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              {employee.name}
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={briefcase} alt="briefcase" />
              {employee?.roles?.find((role) => role?.current)?.name}
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Lexend, sans-serif",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={gmail} alt="gmail" />
              {employee?.email}
            </Typography>
          </Stack>
        </Box>

        <Button
          onClick={() => navigate(`/employees/${employee.name}/edit`)}
          startIcon={<img src={edit2} alt="edit" />}
          sx={{
            color: "#fff",
            fontFamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
            textTransform: "capitalize",
            padding: "10px 20px",
            borderRadius: "10px",
            bgcolor: "#7152F3",

            "&:hover": {
              bgcolor: "#7152F3",
            },
          }}
        >
          Edit Profile
        </Button>
      </Stack>

      <Box
        sx={{
          display: "flex",
          mt: "30px",
          gap: "30px",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "242px",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
            p: "10px 5px",
          }}
        >
          <Button
            onClick={() => {
              setSelected("profile");
              navigate("", { replace: true });
            }}
            startIcon={<img src={user} alt="user" />}
            sx={{
              width: "100%",
              color: "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: selected === "profile" ? 600 : 300,
              lineHeight: "24px",
              textTransform: "capitalize",
              padding: "10px 20px",
              borderRadius: "10px",
              bgcolor: selected === "profile" ? "#7152F3" : "transparent",
              justifyContent: "flex-start",
              mb: "10px",

              "&:hover": {
                bgcolor: selected === "profile" ? "#7152F3" : "transparent",
              },
            }}
          >
            Profile
          </Button>

          <Button
            onClick={() => {
              setSelected("history");
              navigate(`history`, { replace: true });
            }}
            startIcon={<img src={file} alt="user" />}
            sx={{
              width: "100%",
              color: "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: selected === "history" ? 600 : 300,
              lineHeight: "24px",
              textTransform: "capitalize",
              padding: "10px 20px",
              borderRadius: "10px",
              bgcolor: selected === "history" ? "#7152F3" : "transparent",
              justifyContent: "flex-start",

              "&:hover": {
                bgcolor: selected === "history" ? "#7152F3" : "transparent",
              },
            }}
          >
            History
          </Button>
        </Box>

        <Outlet />
      </Box>
    </Box>
  );
};

export default EmployeeDetails;
