import {
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/MainContext";
import { Check } from "@mui/icons-material";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 18,
    height: 18,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const EmployeeHistory = () => {
  const { employee_name } = useParams();
  const { employees } = useContext(MainContext);

  const roles = employees
    .find((employee) => employee.name === employee_name)
    .roles.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

  return (
    <Box
      sx={{
        flex: 1,
      }}
    >
      <Stepper
        orientation="vertical"
        activeStep={roles?.length - 1}
        connector={<QontoConnector />}
      >
        {roles.map((role, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Lexend, sans-sarif",
                }}
              >
                {role?.name}
              </Typography>

              <Box>
                <Typography
                  sx={{
                    color: "#A2A1A8",
                    fontFamily: "Lexend, sans-sarif",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Duties: </span>
                  {role?.duties}
                </Typography>

                <Typography
                  sx={{
                    color: "#A2A1A8",
                    fontFamily: "Lexend, sans-sarif",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Period: </span>
                  {role?.start_date}
                  <span>
                    {" "}
                    to{" "}
                    {role?.end_date ? role?.end_date : <strong>current</strong>}
                  </span>
                </Typography>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default EmployeeHistory;
