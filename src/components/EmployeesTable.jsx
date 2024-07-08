import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { employeeData } from "../utils/constants";
import view from "../assets/icons/view.svg";
import edit from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/trash.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#fff",
    fontfamily: "Lexend, sans-serif",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "24px",
    borderColor: "rgba(162, 161, 168, 0.10)",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#fff",
    fontfamily: "Lexend, sans-serif",
    fontSize: 14,
    fontWeight: 300,
    lineHeight: "24px",
    borderColor: "rgba(162, 161, 168, 0.10)",
  },
}));

const EmployeesTable = ({ employees }) => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead
            sx={{
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <TableRow
              sx={{
                color: "#fff",
              }}
            >
              <StyledTableCell>Employee Name</StyledTableCell>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Department</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <StyledTableCell>{employee?.name}</StyledTableCell>
                <StyledTableCell>{employee.employee_id}</StyledTableCell>
                <StyledTableCell>{employee.department}</StyledTableCell>
                <StyledTableCell>
                  {employee.roles.find((role) => role.current)?.name}
                </StyledTableCell>
                <StyledTableCell>
                  <span
                    style={{
                      color: employee.status ? "#7152F3" : "#ccc",
                      backgroundColor: employee.status
                        ? "rgba(113, 82, 243, 0.10)"
                        : "rgba(162, 161, 168, 0.10)",
                      padding: "3px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {employee.status ? "Active" : "Left"}
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  <Stack direction={"row"} gap={"10px"}>
                    <IconButton
                      onClick={() => navigate(`/employees/${employee.name}`)}
                      sx={{
                        p: 0,
                        m: 0,
                      }}
                    >
                      <img src={view} alt="view" />
                    </IconButton>
                    <IconButton
                      sx={{
                        p: 0,
                        m: 0,
                      }}
                    >
                      <img src={edit} alt="edit" />
                    </IconButton>{" "}
                    <IconButton
                      sx={{
                        p: 0,
                        m: 0,
                      }}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </IconButton>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={employeeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default EmployeesTable;
