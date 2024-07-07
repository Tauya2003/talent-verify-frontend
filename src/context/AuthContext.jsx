import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:8000/api/auth";

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/token/`, {
        username: e.target.username.value,
        password: e.target.password.value,
      });

      if (response.status === 200) {
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));

        setLoginLoading(false);
      } else {
        setLoginFailed(true);
        setLoginLoading(false);
      }
    } catch (error) {
      setLoginFailed(true);
      setLoginLoading(false);
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  const updateToken = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/token/refresh/`, {
        refresh: authTokens?.refresh,
      });

      if (response.status === 200) {
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        localStorage.setItem("authTokens", JSON.stringify(response.data));
      } else logout();
    } catch (error) {
      logout();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    loginLoading: loginLoading,
    loginFailed: loginFailed,

    loginUser: loginUser,
    logout: logout,
    setLoginFailed: setLoginFailed,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
