import { Alert, Box, Button, CircularProgress, Snackbar } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const CompanyDepartsments = () => {
  const navigate = useNavigate();

  const { addNewDepartment, loading, error, setError, success, setSuccess } =
    useContext(MainContext);

  const handleClose = (event) => {
    const reason = event?.reason;
    if (reason === "clickaway") {
      return;
    }

    setError(null);
    setSuccess(false);
  };
  return (
    <Box component={"form"} onSubmit={addNewDepartment}>
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
            name="department_name"
            placeholder="Department Name"
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
            disabled
            type="text"
            name="department_head"
            placeholder="Department Head"
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
            "Add"
          )}
        </Button>

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
          Done 🎉
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

export default CompanyDepartsments;
