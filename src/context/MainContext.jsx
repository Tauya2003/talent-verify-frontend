import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { postToAPI } from "../utils/postToAPi";

const MainContext = createContext(null);
export default MainContext;

export const MainProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [company, setCompany] = useState({});
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to add a new employee
  const addNewEmployee = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("fname") + " " + formData.get("lname"),
      employee_id: formData.get("employee_id"),
      company: company.name,
      department: formData.get("department"),
      roles: [
        {
          name: formData.get("role"),
          duties: formData.get("duties"),
        },
      ],
    };

    try {
      postToAPI("employees/new/", data).then((response) => {
        if (response.status === 201) {
          setEmployees([...employees, response.data]);
          setLoading(false);
          setSuccess(true);
          form.reset();
        } else {
          setError(
            response.data.error.employee_id[0]
              ? response.data.error.employee_id[0]
              : "An error occurred. Please try again."
          );
          setLoading(false);
          setSuccess(false);
        }
      });
    } catch (err) {
      setError(err);
      setLoading(false);
      setSuccess(false);
    }
  };

  // Function for adding a new employee
  const addNewDepartment = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("department_name"),
      company: company.name,
    };

    try {
      postToAPI("departments/new/", data).then((response) => {
        if (response.status === 201) {
          setDepartments([...departments, response.data]);
          setLoading(false);
          setSuccess(true);
          form.reset();
        } else {
          setError(
            response.data.error.name[0]
              ? response.data.error.name[0]
              : "An error occurred. Please try again."
          );
          setLoading(false);
          setSuccess(false);
        }
      });
    } catch (err) {
      setError(err);
      setLoading(false);
      setSuccess(false);
    }
  };

  useEffect(() => {
    fetchFromAPI("employees/").then((response) => {
      if (response.status === 200) {
        setEmployees(response.data);
      }
    });

    fetchFromAPI("companies/").then((response) => {
      if (response.status === 200) {
        setCompany(response.data[0]);

        setDepartments(response.data[0].departments);
      }
    });
  }, []);

  const contextData = {
    employees,
    company,
    departments,
    error,
    loading,
    success,

    addNewDepartment,
    addNewEmployee,
    setError,
    setSuccess,
  };

  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};
