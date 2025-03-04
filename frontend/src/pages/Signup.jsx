import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCreateUser from "../hooks/auth/useCreateUser";

function Signup() {
  const navigate = useNavigate();
  const { createUser, loading } = useCreateUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !role) {
      toast.error("Please fill out all fields!");
      return;
    }

    const res = await createUser({ name, email, password, role });
    if (res) {
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-auto h-screen dark:text-black">
      <form onSubmit={handleSignup} className="bg-gray-200 p-8 shadow-2xl rounded-2xl w-sm dark:text-black">
        <h1 className="text-2xl py-3 font-bold uppercase text-center">Sign Up</h1>
        
        <div>
          <label className="font-semibold">Name*</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold mb-3 dark:text-black"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="font-semibold">Email*</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold mb-3"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="font-semibold">Password*</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold mb-3"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="font-semibold">Role*</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="block border-2 border-gray-400 px-2 py-2 rounded-lg w-full font-semibold"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="cashier">Cashier</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-purple-500 text-white w-full mt-3 p-2 rounded-lg active:scale-95 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-center mt-3 font-semibold">
          Already have an account?
          <Link to="/signin" className="text-blue-500 underline ml-1">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
