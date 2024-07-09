import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
} from "@mui/material";
import camera from "../assets/icons/camera.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/MainContext";

const AddNewEmployee = () => {
  const navigate = useNavigate();
  const {
    addNewEmployee,
    departments,
    error,
    success,
    setError,
    setSuccess,
    loading,
  } = useContext(MainContext);

  const handleClose = (event) => {
    const reason = event?.reason;
    if (reason === "clickaway") {
      return;
    }

    setError(null);
    setSuccess(false);
  };

  return (
    <Box
      component="form"
      onSubmit={addNewEmployee}
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
        {/* First Name */}
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

        {/* Last Name */}
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

        {/* Employee Id */}
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

        {/* Department */}
        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          {/* <input
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
          /> */}
          <select
            required
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
          >
            <option value="" selected disabled>
              Department
            </option>

            {departments.map((department, index) => (
              <option
                key={index}
                value={department.name}
                style={{ color: "#000" }}
              >
                {department.name}
              </option>
            ))}
          </select>
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
          {loading ? (
            <CircularProgress
              variant="indeterminate"
              disableShrink
              size={24}
              sx={{ color: "#fff", mx: "6px" }}
            />
          ) : (
            "Save"
          )}
        </Button>
      </Box>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {error ? error : "An error occurred. Please try again."}
        </Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Saved Successfuly!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddNewEmployee;
