import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BulkEmployeeUpload = () => {
  return (
    <Box
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
        Upload a CSV, text or Excel file to bulk upload employees
      </Typography>

      <Box
        sx={{
          display: "flex",
          mt: "20px",
        }}
      >
        <input
          type="file"
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
        Upload
      </Button>

      <Link style={{ textDecoration: "none" }}>
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
          Download a sample file
        </Typography>
      </Link>
    </Box>
  );
};

export default BulkEmployeeUpload;
