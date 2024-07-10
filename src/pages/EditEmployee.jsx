import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainContext from "../context/MainContext";

const EditEmployee = () => {
  const navigate = useNavigate();
  const { employee_name } = useParams();
  const {
    employees,
    departments,
    loading,
    updateEmployee,
    error,
    success,
    setError,
    setSuccess,
  } = useContext(MainContext);
  const employee = employees.find(
    (employee) => employee.name === employee_name
  );

  const [fname, setFname] = useState(employee.name.split(" ")[0]);
  const [lname, setLname] = useState(employee.name.split(" ")[1]);
  const [employee_id, setEmployeeId] = useState(employee.employee_id);
  const [department, setDepartment] = useState(employee.department);
  const [role, setRole] = useState(employee.roles[0].name);
  const [duties, setDuties] = useState(employee.roles[0].duties);

  const handleClose = (event) => {
    const reason = event?.reason;
    if (reason === "clickaway") {
      return;
    }

    setError(null);
    setSuccess(false);

    success && navigate(`/employees/${fname} ${lname}`);
  };

  return (
    <Box
      component={"form"}
      onSubmit={(e) => updateEmployee(e, employee.id)}
      sx={{
        flex: 1,
        borderRadius: "10px",
        border: "1px solid rgba(162, 161, 168, 0.20)",
        p: "20px",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          pb: "30px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderBottom: "1px solid rgba(162, 161, 168, 0.20)",
        }}
      >
        <Button
          onClick={() => navigate(`/employees/${employee.name}/new-role`)}
          sx={{
            color: "#fff",
            fontFamily: "Lexend, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
            textTransform: "capitalize",
            padding: "10px 20px",
            borderRadius: "10px",
            bgcolor: "#7152F3",
            ml: "auto",

            "&:hover": {
              bgcolor: "#7152F3",
            },
          }}
        >
          New Role
        </Button>
      </Stack>

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
        {/* First Name */}
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
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            type="text"
            name="fname"
            placeholder="First Name"
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

        {/* Last Name */}
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
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            type="text"
            name="lname"
            placeholder="Last Name"
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

        {/* Employee Id */}
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
            disabled
            value={employee_id}
            onChange={(e) => setEmployeeId(e.target.value)}
            type="text"
            name="employee_id"
            placeholder="Employee ID"
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

        {/* Department */}
        <Box
          sx={{
            display: "flex",
            padding: "16px",
            flex: "48.5% 0 0",
            borderRadius: "10px",
            border: "1px solid rgba(162, 161, 168, 0.20)",
          }}
        >
          <select
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            name="department"
            placeholder="Department"
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
          >
            <option value="" selected disabled>
              Department
            </option>

            {departments.map((department, index) => (
              <option
                key={index}
                value={department.name}
                style={{ color: "#000" }}
              >
                {department.name}
              </option>
            ))}
          </select>
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
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            name="role"
            placeholder="Role"
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
          <textarea
            required
            value={duties}
            onChange={(e) => setDuties(e.target.value)}
            name="duties"
            placeholder="Role Duties"
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
          onClick={() => navigate(`/employees/${employee.name}`)}
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
          Cancel
        </Button>

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
            "Update"
          )}
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
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Updated Successfuly!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EditEmployee;
