import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import MainContext from "../context/MainContext";
import { fetchFromAPI } from "./fetchFromAPI";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(AuthContext);
  const {
    company,
    departments,
    employees,
    setCompany,
    setDepartments,
    setEmployees,
  } = useContext(MainContext);

  useEffect(() => {
    fetchFromAPI("employees/").then((response) => {
      if (response.status === 200) {
        setEmployees(
          response.data.filter((emp) => emp.company === user?.company)
        );
      }
    });

    fetchFromAPI("companies/").then((response) => {
      if (response.status === 200) {
        setCompany(
          response.data.find(
            (comp) => comp.registration_number === user?.company
          )
        );
        setDepartments(
          response.data.find(
            (comp) => comp.registration_number === user?.company
          )?.departments
        );
      }
    });
  }, [user, departments?.length, employees?.length]);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;
