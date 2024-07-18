import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SignupModal from "../components/SignupModal";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, loginLoading, emailExists, setEmailExists } =
    useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [match, setMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setMatch(false);
      return;
    }

    createUser(e);
  };

  const handleClose = (e) => {
    const reason = e?.reason;
    if (reason === "clickaway") {
      return;
    }
    setMatch(true);
    setEmailExists(null);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        width: "40%",
        height: "100%",
        backgroundColor: "#16151C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "50px",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 500,
          fontSize: "32px",
          textTransform: "uppercase",
          fontFamily: "Lexend, sans-serif",
        }}
      >
        Signup
      </Typography>

      <Typography
        sx={{
          fontFamily: "Lexend, sans-serif",
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
        }}
      >
        It's free and only takes a minute
      </Typography>

      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          gap: "16px",
          display: "flex",
          flexDirection: "column",
          mt: "50px",
          width: "100%",
        }}
      >
        {/* Email */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              ml: "10px",
              mb: "5px",
              color: "#eee",
            }}
          >
            Email
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #7152F3",
            }}
          >
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontFamily: "Lexend, sans-serif",
                fontSize: "16px",
                fontWeight: "300",
                color: "#eee",
                backgroundColor: "transparent",
              }}
            />
          </Box>
        </Box>

        {/* Password */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              ml: "10px",
              mb: "5px",
              color: "#eee",
            }}
          >
            Password
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #7152F3",
            }}
          >
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontFamily: "Lexend, sans-serif",
                fontSize: "16px",
                fontWeight: "300",
                color: "#eee",
                backgroundColor: "transparent",
              }}
            />
          </Box>
        </Box>

        {/* Confirm password */}
        <Box>
          <Typography
            sx={{
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              ml: "10px",
              mb: "5px",
              color: "#eee",
            }}
          >
            Confirm Password
          </Typography>
          <Box
            sx={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1px solid #7152F3",
            }}
          >
            <input
              required
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontFamily: "Lexend, sans-serif",
                fontSize: "16px",
                fontWeight: "300",
                color: "#eee",
                backgroundColor: "transparent",
              }}
            />
          </Box>
        </Box>

        <Button
          type="submit"
          sx={{
            mt: "5px",
            color: "#fff",
            fontFamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
            textTransform: "none",
            padding: "14px",
            borderRadius: "10px",
            backgroundColor: "#7152F3",

            "&:hover": {
              backgroundColor: "#5A3DC4",
            },
          }}
        >
          {loginLoading ? (
            <CircularProgress
              variant="indeterminate"
              disableShrink
              size={24}
              sx={{ color: "#fff" }}
            />
          ) : (
            "Signup"
          )}
        </Button>
      </Box>

      <Stack
        width={"100%"}
        direction={"column"}
        alignItems={"center"}
        mt={"auto"}
      >
        <Typography
          sx={{
            color: "#6E7191",
            fontFamily: "Lexend, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: "24px",
          }}
        >
          Already have an account?
        </Typography>

        <Button
          onClick={() => navigate("/login")}
          sx={{
            p: 0,
            m: "5px",
            color: "#7152F3",
            fontFamily: "Lexend, sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            letterSpacing: "2px ",
            lineHeight: "24px",
          }}
        >
          Login
        </Button>
      </Stack>

      <Snackbar
        open={!match}
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
          Passwords do not match
        </Alert>
      </Snackbar>

      <Snackbar
        open={emailExists}
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
          {emailExists}
        </Alert>
      </Snackbar>

      <SignupModal />
    </Box>
  );
};

export default SignUp;
