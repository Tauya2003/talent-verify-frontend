import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(180deg, #7152F320 0%, #5A3DC420 87%, #4A2E8D50 100%)",
        }}
      >
        <Box
          sx={{
            width: "557px",
            height: "557px",
            border: "1px solid #16151C",
            borderRadius: "50%",
            position: "absolute",
            bottom: "-300px",
            left: "-250px",
          }}
        />

        <Box
          sx={{
            width: "557px",
            height: "557px",
            border: "1px solid #16151C",
            borderRadius: "50%",
            position: "absolute",
            bottom: "-326px",
            left: "-169px",
          }}
        />
      </Box>

      <Outlet />
    </Box>
  );
};

export default Login;
