import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AllEmployees from "./pages/AllEmployees";

function App() {
  return (
    <>
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
              <Route
                path="add-new-employee"
                element={<div>Add New Employee</div>}
              />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
