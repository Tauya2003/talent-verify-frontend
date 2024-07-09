import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const MainContext = createContext(null);
export default MainContext;

export const MainProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [company, setCompany] = useState({});

  useEffect(() => {
    fetchFromAPI("employees/").then((response) => {
      if (response.status === 200) {
        setEmployees(response.data);
      }
    });

    fetchFromAPI("companies/").then((response) => {
      if (response.status === 200) {
        setCompany(response.data[0]);
      }
    });
  }, []);

  const contextData = {
    employees,
    company,
  };

  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};
