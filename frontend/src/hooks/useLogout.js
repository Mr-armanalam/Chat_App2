import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const logout = async () => {
    setLoading(true);
    // Logout logic goes here
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error("data.error");
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
        toast.error(error.message)
    }
    finally {
      setLoading(false);
      // Redirect to login page
      // window.location.href = "/login"
    }
  };
  return { loading, logout };
};

export default useLogout;
