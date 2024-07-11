import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
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

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const EmployeesTable = ({ employees }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - employees.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="departments pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee Name</StyledTableCell>
              <StyledTableCell>Employee ID</StyledTableCell>
              <StyledTableCell>Department</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? employees.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : employees
            ).map((employee, index) => (
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
                        width: "17px",
                      }}
                    >
                      <img src={view} alt="view" style={{ width: "100%" }} />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        navigate(`/employees/${employee.name}/edit`)
                      }
                      sx={{
                        p: 0,
                        m: 0,
                        width: "17px",
                      }}
                    >
                      <img src={edit} alt="edit" style={{ width: "100%" }} />
                    </IconButton>{" "}
                    <IconButton
                      sx={{
                        p: 0,
                        m: 0,
                        width: "17px",
                      }}
                    >
                      <img
                        src={deleteIcon}
                        alt="delete"
                        style={{ width: "100%" }}
                      />
                    </IconButton>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow
              sx={{
                border: "none",
                bgcolor: "#6E7191",
              }}
            >
              <TablePagination
                rowsPerPageOptions={[1, 5, 10, 25, { label: "All", value: -1 }]}
                count={employees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeesTable;
