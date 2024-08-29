import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
      const success = handleInputErrors({username, password });

      if (!success) return;
    setLoading(true);
    try {
      // API call to login endpoint
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      // const response = await axios.post('/api/login', {username, password})
      const data = await res.json();
      if (data.message) {
        throw new Error(data.message);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.error("Error in login controller", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({username, password,}) {
  if (!username || !password ) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
