import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(undefined);

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        console.log("🔄 Loading user from localStorage:", user);
        setAuthUser(user);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("Users");
      }
    }
  }, []);

  // Update localStorage when authUser changes
  useEffect(() => {
    if (authUser) {
      console.log("🔄 Storing user in localStorage:", authUser);
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      console.log("🔄 Clearing user from localStorage");
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  // Add logout function to context
  const logout = () => {
    console.log("🚪 Logout function called");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={[authUser, setAuthUser, logout]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
