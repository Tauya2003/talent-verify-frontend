import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { patch } from "../utils/update";

const BASE_URL = "http://127.0.0.1:8000/api";

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
  const [userCreated, setUserCreated] = useState(false);
  const [emailExists, setEmailExists] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/auth/token/`, {
        email: e.target.email.value,
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

  const createUser = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await axios.post(`${BASE_URL}/users/new/`, {
        email: formData.get("email"),
        password: formData.get("password"),
      });
      if (response.status === 201) {
        setUserCreated(true);
        formData.clear();
      }
    } catch (error) {
      if (error.response.data.email) {
        setEmailExists(error.response.data.email);
      } else {
        console.log(error.response.data);
      }
    } finally {
      setLoginLoading(false);
    }
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

  // update user.company
  const updateUserCo = (email, comp) => {
    fetchFromAPI("users/").then((response) => {
      if (response.status === 200) {
        const currentUser = response.data.find((user) => user.email === email);

        patch(`users/${currentUser.id}/`, {
          ...currentUser,
          company: comp,
        }).then((response) => {
          if (response.status === 200) {
            setUser({ ...user, ...response.data });
          }
        });
      }
    });
  };

  let contextData = {
    user: user,
    loginLoading,
    loginFailed,
    userCreated,
    emailExists,

    updateUserCo,
    createUser: createUser,
    loginUser: loginUser,
    logout: logout,
    setLoginFailed: setLoginFailed,
    setLoginLoading: setLoginLoading,
    setUserCreated: setUserCreated,
    setEmailExists: setEmailExists,
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
