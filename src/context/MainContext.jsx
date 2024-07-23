import { createContext, useState } from "react";
import { postToAPI } from "../utils/postToAPi";
import axios from "axios";

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
      company: company.registration_number,
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

  // function to add new role
  const addNewRole = (e, id) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Add 1 to get actual month (January is 0)
    const day = today.getDate();
    const formattedDate = `${year}-${month}-${day}`;

    const data = {
      name: formData.get("role"),
      duties: formData.get("duties"),
      employee: id,
    };

    try {
      const roles = employees.find((emp) => (emp.id = id)).roles;
      for (let index = 0; index < roles.length; index++) {
        const element = roles[index];
        if (element.current) {
          update(`roles/${element.id}/`, {
            ...element,
            current: false,
            end_date: formattedDate,
          }).then((response) => {
            if (response.status !== 200) {
              setError("An error occurred. Please try again.");
              setLoading(false);
              setSuccess(false);
            }
          });
        }
      }
      postToAPI("roles/new/", data).then((response) => {
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
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  // Function to update an employee
  const updateEmployee = (e, id) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("fname") + " " + formData.get("lname"),
      company: company.name,
      department: formData.get("department"),
      roles: [{ name: formData.get("role"), duties: formData.get("duties") }],
    };

    try {
      update(`employees/${id}/`, data).then((response) => {
        if (response.status === 200) {
          setEmployees([...employees, response.data]);
          setLoading(false);
          setSuccess(true);
          form.reset();
        } else {
          setError("An error occurred. Please try again.");
          setLoading(false);
          setSuccess(false);
          console.log(response);
        }
      });
    } catch (err) {
      setError(err);
      setLoading(false);
      setSuccess(false);
      console.log(err);
    }
  };

  // Bulk Uploading of employees
  const uploadfile = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = {
      file: e.target.file.files[0],
    };

    console.log(data);

    const upload = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://127.0.0.1:8000/api/upload/",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response;
      } catch (error) {
        return error;
      }
    };

    upload().then((response) => {
      if (response.status === 201) {
        setLoading(false);
        setSuccess(true);
        form.reset();
      } else {
        setError("An error occurred. Please try again.");
        setLoading(false);
        setSuccess(false);
      }
    });
  };

  // register compnay
  const registerCompany = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      registration_date: formData.get("regDate"),
      registration_number: formData.get("regNo"),
      address: formData.get("address"),
      contact_person: formData.get("contactPerson"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    try {
      postToAPI("companies/new/", data).then((response) => {
        if (response.status === 201) {
          setCompany(response.data);
          setLoading(false);
          setSuccess(true);
          form.reset();
        } else {
          if (response?.data?.error?.email !== undefined) {
            setError(response?.data?.error?.email[0]);
          } else if (response?.data?.error?.registration_number !== undefined) {
            setError(response?.data?.error?.registration_number[0]);
          } else if (response?.data?.error?.non_field_errors !== undefined) {
            setError(response?.data?.error?.non_field_errors[0]);
          } else {
            setError("An error occurred. Please try again.");
          }
          setLoading(false);
          setSuccess(false);
        }
      });
    } catch (err) {
      setError(err);
      setSuccess(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const contextData = {
    employees,
    company,
    departments,
    error,
    loading,
    success,

    addNewDepartment,
    addNewEmployee,
    addNewRole,
    updateEmployee,
    uploadfile,
    setError,
    setSuccess,
    registerCompany,

    setCompany,
    setDepartments,
    setEmployees,
  };

  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};
