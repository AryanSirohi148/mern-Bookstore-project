import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser, logout] = useAuth();
  
  const handleLogout = () => {
    try {
      console.log("🚪 LOGOUT INITIATED!");
      console.log("Current authUser:", authUser);
      
      // Use the logout function from context
      logout();
      console.log("✅ Auth state cleared via context");
      
      // Remove from localStorage (backup)
      localStorage.removeItem("Users");
      console.log("✅ localStorage cleared");
      
      toast.success("Logout successfully");
      console.log("✅ Logout toast shown");

      // Reload page after a short delay
      setTimeout(() => {
        console.log("🔄 Reloading page...");
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("❌ Logout error:", error);
      toast.error("Error: " + error);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
