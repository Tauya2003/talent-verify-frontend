import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AllEmployees from "./pages/AllEmployees";
import AddNewEmployee from "./pages/AddNewEmployee";
import BulkEmployeeUpload from "./pages/BulkEmployeeUpload";
import { MainProvider } from "./context/MainContext";
import EmployeeDetails from "./pages/EmployeeDetails";
import ViewEmployeeDetails from "./components/ViewEmployeeDetails";
import EmployeeHistory from "./components/EmployeeHistory";
import Departments from "./pages/Departments";
import AllDepartments from "./pages/AllDepartments";
import ViewDepartment from "./pages/ViewDepartment";
import AddNewDepartment from "./pages/AddNewDepartment";
import EditEmployee from "./pages/EditEmployee";
import NewRole from "./pages/NewRole";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <MainProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/employees" element={<Employees />}>
              <Route index element={<AllEmployees />} />
              <Route path="add-new-employee" element={<AddNewEmployee />} />
              <Route path="bulk-upload" element={<BulkEmployeeUpload />} />
              <Route path=":employee_name" element={<EmployeeDetails />}>
                <Route index element={<ViewEmployeeDetails />} />
                <Route path="history" element={<EmployeeHistory />} />
              </Route>

              <Route path=":employee_name/edit" element={<EditEmployee />} />

              <Route path=":employee_name/new-role" element={<NewRole />} />
            </Route>
            <Route path="/departments" element={<Departments />}>
              <Route index element={<AllDepartments />} />
              <Route path=":department_name" element={<ViewDepartment />} />
              <Route path="add-new" element={<AddNewDepartment />} />
            </Route>

            <Route path="/search/:search_term" element={<SearchResults />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </MainProvider>
  );
}

export default App;
