import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../../public/logo.svg";
import { CheckBox } from "@mui/icons-material";

const Login = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box sx={{ width: "60%", height: "100%" }} />

      <Box
        sx={{
          flexShrink: 0,
          width: "40%",
          height: "100%",
          backgroundColor: "#16151C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: "50px",
        }}
      >
        <Stack
          direction={"row"}
          gap={"12px"}
          alignItems={"center"}
          marginBottom={"40px"}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              bgcolor: "#8D75F5",
              display: "grid",
              placeContent: "center",
            }}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "32px",
              textTransform: "uppercase",
              fontFamily: "Lexend, sans-serif",
            }}
          >
            Talent Verify
          </Typography>
        </Stack>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "40px",
            fontFamily: "Lexend, sans-serif",
          }}
        >
          Welcome 👋
        </Typography>
        <Typography
          sx={{
            fontFamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
          }}
        >
          Please login here
        </Typography>

        <Box
          component={"form"}
          sx={{
            gap: "16px",
            display: "flex",
            flexDirection: "column",
            mt: "30px",
          }}
        >
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
                color: "#fff",
                backgroundColor: "transparent",
              }}
            />
          </Box>

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
                color: "#fff",
                backgroundColor: "transparent",
              }}
            />
          </Box>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CheckBox
                defaultChecked
                sx={{ color: "#7152F3", height: "24px", width: "24px" }}
              />

              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                Remember Me
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#7152F3",
                fontFamily: "Lexend, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "22px",
              }}
            >
              Forgot Password?
            </Typography>
          </Stack>

          <Button
            type="submit"
            sx={{
              color: "#fff",
              fontFamily: "Lexend, sans-serif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              textTransform: "none",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#7152F3",

              "&:hover": {
                backgroundColor: "#5A3DC4",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
