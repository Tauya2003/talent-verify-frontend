import { Box, Button, Stack } from "@mui/material";
import camera from "../assets/icons/camera.svg";
import { useNavigate } from "react-router-dom";
import { postToAPI } from "../utils/postToAPi";

const AddNewEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.fname.value + " " + e.target.lname.value,
      employee_id: e.target.employee_id.value,
      company: 1,
      department: e.target.department.value,
      roles: [
        {
          name: e.target.role.value,
          duties: e.target.duties.value,
        },
      ],
    };

    postToAPI("employees/new/", data).then((response) => {
      console.log(response);
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        flex: 1,
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
      }}
    >
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
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

        <Button
          onClick={() => navigate("/employees/bulk-upload")}
          sx={{
            color: "#fff",
            fontfamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: "300",
            lineHeight: "24px",
            textTransform: "capitalize",
            padding: "10px 20px",
            borderRadius: "10px",
            bgcolor: "#7152F3",

            "&:hover": {
              bgcolor: "#7152F399",
            },
          }}
        >
          Bulk Upload
        </Button>
      </Stack>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          mt: "20px",
          width: "100%",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <input
            required
            type="text"
            name="fname"
            placeholder="First Name"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <input
            required
            type="text"
            name="lname"
            placeholder="Last Name"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <input
            required
            type="text"
            name="employee_id"
            placeholder="Employee ID"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <input
            required
            type="text"
            name="department"
            placeholder="Department"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <input
            required
            type="text"
            name="role"
            placeholder="Role"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <textarea
            required
            name="duties"
            placeholder="Role Duties"
            style={{
              border: "none",
              width: "100%",
              outline: "none",
              fontSize: "16px",
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontWeight: "300",
              lineHeight: "24px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: "20px",
          width: "100%",
          mt: "20px",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            fontfamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: "300",
            lineHeight: "24px",
            textTransform: "capitalize",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          sx={{
            color: "#fff",
            fontfamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: "300",
            lineHeight: "24px",
            textTransform: "capitalize",
            padding: "10px 20px",
            borderRadius: "10px",
            bgcolor: "#7152F3",

            "&:hover": {
              bgcolor: "#7152F399",
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewEmployee;
