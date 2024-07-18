import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import party from "../assets/icons/party.svg";
import { useNavigate } from "react-router-dom";

export default function SignupModal() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "grid",
          placeContent: "center",
          bgcolor: "rgba(162, 161, 168, 0.20)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            outline: "none",
            width: "436px",
            flexShrink: 0,
            borderRadius: "30px",
            bgcolor: "#16151C",
            p: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "100px",
              fontFamily: "lexend, sans-sarif",
              fontWeight: 700,
              lineHeight: "150%",
            }}
          >
            🎉
          </Typography>

          <Typography
            sx={{
              alignSelf: "stretch",
              fontFamily: "Lexend, sans-sarif",
              fontSize: "30px",
              textAlign: "center",
              fontWeight: 600,
              lineHeight: "40px",
            }}
          >
            Password Update Successfully
          </Typography>

          <Typography
            sx={{
              alignSelf: "stretch",
              color: "#A2A1A8",
              textAlign: "center",
              fontFamily: "Lexend, sans-sarif",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              mt: "5px",
            }}
          >
            Your password has been update successfully
          </Typography>

          <Button
            onClick={() => navigate("/login")}
            sx={{
              color: "#fff",
              fontFamily: "Lexend, sans-sarif",
              fontSize: "16px",
              fontWeight: "300",
              lineHeight: "24px",
              textTransform: "initial",
              p: "16px",
              borderRadius: "10px",
              bgcolor: "#7152F3",
              width: "100%",
              mt: "40px",

              "&:hover": {
                backgroundColor: "#5A3DC4",
              },
            }}
          >
            Back to Login
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
