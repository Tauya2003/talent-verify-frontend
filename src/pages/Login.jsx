import {
  Button,
  Card,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Card
        sx={{
          width: "30rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem 0",
          boxShadow: 0,
          backgroundColor: "#f9f9f9",
          borderRadius: "1rem",
          border: "1px solid #ddd",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            mb: "1rem",
          }}
        >
          Talent Verify
        </Typography>

        <TextField
          sx={{ width: "70%" }}
          id="username"
          //   label="Username"
          type="text"
          variant="outlined"
          helperText="Please enter your username"
        />

        <TextField
          sx={{ width: "70%" }}
          id="password"
          //   label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          helperText="Please enter your password"
        />

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"70%"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Checkbox />
            <Typography
              sx={{
                fontSize: "0.75rem",
                color: "#666",
              }}
            >
              Remember me
            </Typography>
          </Stack>

          <Link
            style={{
              textDecoration: "none",
              fontSize: "0.75rem",
              color: "#2196F3",
            }}
          >
            Forgot password?
          </Link>
        </Stack>

        <Button
          variant="contained"
          sx={{
            width: "70%",
            backgroundColor: "#4CAF50",

            "&:hover": {
              backgroundColor: "#388E3C",
            },
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            fontSize: "0.75rem",
            mb: "1rem",
          }}
        >
          Don't have an account?{" "}
          <Link style={{ textDecoration: "none", color: "#2196F3" }}>
            Sign up
          </Link>
        </Typography>
      </Card>
    </div>
  );
};

export default Login;
