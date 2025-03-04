import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../utils/api";

function useCreateUser() {
  const [loading, setLoading] = useState(false);

  const createUser = async ({ name, email, password, role }) => {
    setLoading(true);
    try {
      const res = await api.post("/api/auth/signup",  { name, email, password, role });
      toast.success("Account created successfully!");
      return res;
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Server Error!";
      toast.error(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, loading };
}

export default useCreateUser;
