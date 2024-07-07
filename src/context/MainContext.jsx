import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const MainContext = createContext(null);
export default MainContext;

export const MainProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchFromAPI("employees/").then((response) => {
      if (response.status === 200) {
        setEmployees(response.data);
      }
    });
  }, []);

  const contextData = {
    employees,
  };
  return (
    <MainContext.Provider value={contextData}>{children}</MainContext.Provider>
  );
};
