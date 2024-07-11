import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../context/MainContext";

const BulkEmployeeUpload = () => {
  const { uploadfile, loading, error, setSuccess, setError, success } =
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
    <Box
      component={"form"}
      onSubmit={uploadfile}
      sx={{
        flex: 1,
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontFamily: "Lexend, sans-sarif",
          fontWeight: "300",
          lineHeight: "24px",
          color: "#fff",
        }}
      >
        Upload a CSV or Excel file to bulk upload or update employees
      </Typography>

      <Box
        sx={{
          display: "flex",
          mt: "20px",
        }}
      >
        <input
          type="file"
          required
          accept=".csv, .xlsx"
          name="file"
          style={{
            border: "none",
            width: "100%",
            outline: "none",
            fontSize: "15px",
            backgroundColor: "transparent",
            color: "#fff",
            fontFamily: "Lexend, sans-sarif",
            fontWeight: "300",
            lineHeight: "24px",
          }}
        />
      </Box>

      <Button
        type="submit"
        sx={{
          mt: "20px",
          backgroundColor: "#7C5DFA",
          color: "#fff",
          fontSize: "16px",
          fontFamily: "Lexend, sans-sarif",
          fontWeight: "300",
          lineHeight: "24px",
          borderRadius: "10px",
          textTransform: "none",
          padding: "10px 20px",
          ml: "auto",

          "&:hover": {
            backgroundColor: "#7C5DFA99",
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
          "Upload File"
        )}
      </Button>

      <Link
        style={{ textDecoration: "none" }}
        to="http://127.0.0.1:8000/api/download/sample-csv"
      >
        <Typography
          sx={{
            mt: "20px",
            fontSize: "16px",
            fontFamily: "Lexend, sans-sarif",
            fontWeight: "300",
            lineHeight: "24px",
            color: "#7C5DFA",

            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Download a sample CSV file
        </Typography>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="http://127.0.0.1:8000/api/download/sample-excel"
      >
        <Typography
          sx={{
            mt: "20px",
            fontSize: "16px",
            fontFamily: "Lexend, sans-sarif",
            fontWeight: "300",
            lineHeight: "24px",
            color: "#7C5DFA",

            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Download a sample Excel file
        </Typography>
      </Link>

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

export default BulkEmployeeUpload;
