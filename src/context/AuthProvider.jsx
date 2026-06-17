import { useState, useEffect } from "react";
import api from "../api/axios";
import AuthContext from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadUser() {
      try {
        const res = await api.get("/api/auth/me");
        if (!ignore) setUser(res.data);
      } catch {
        if (!ignore) setUser(null);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadUser();

    return () => {
      ignore = true;
    };
  }, []);

  const login = (provider) => {
    window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
  };

  const logout = async () => {
  try {
    await api.post("/logout");
  } catch {
    // ignore
  } finally {
    setUser(null);
    window.location.href = "/login";
  }
};

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}