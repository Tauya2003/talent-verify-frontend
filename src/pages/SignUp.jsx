import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import MainContext from "../context/MainContext";

const SignUp = () => {
  const { loginLoading } = useContext(MainContext);

  return (
    <Box
      sx={{
        flexShrink: 0,
        width: "40%",
        height: "100%",
        backgroundColor: "#16151C",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
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
          onClick={() => navigate("/signup")}
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
    </Box>
  );
};

export default SignUp;
