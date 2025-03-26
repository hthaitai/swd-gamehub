import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productService from "../api/productService";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [roleNames, setRoleNames] = useState("USER");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await productService.signup(username, password, email, [roleNames]);
      console.log("Signup data:", data);
      toast.success("Signup successful!");
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <ToastContainer />
      <form onSubmit={handleSignup} className="flex flex-col w-80 space-y-3">
        <h1 className="normal-case font-bold">Register</h1>

        <label>Email</label>
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Username</label>
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="username"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          className="bg-black w-full h-10 border-b border-gray-300 focus:outline-none focus:border-white"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Role</label>
        <div>
          <div>
            <input
              name="role"
              type="radio"
              id="role-none"
              value="USER"
              checked={roleNames === "USER"}
              onChange={(e) => setRoleNames(e.target.value)}
            />
            <label className="text-sm ml-2" htmlFor="role-none">
              None
            </label>
          </div>
          <div>
            <input
              name="role"
              type="radio"
              id="role-developer"
              value="DEVELOPER"
              checked={roleNames === "DEVELOPER"}
              onChange={(e) => setRoleNames(e.target.value)}
            />
            <label className="text-sm ml-2" htmlFor="role-developer">
              Developer
            </label>
          </div>
          <div>
            <input
              name="role"
              type="radio"
              id="role-designer"
              value="DESIGNER"
              checked={roleNames === "DESIGNER"}
              onChange={(e) => setRoleNames(e.target.value)}
            />
            <label className="text-sm ml-2" htmlFor="role-designer">
              Graphic Designer
            </label>
          </div>
        </div>

        <div className="flex">
          <p className="normal-case tracking-normal text-xs text-gray-300">
            Have an account?{" "}
            <Link className="hover:text-white hover:underline" to="/login">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-14 bg-white text-black font-bold text-sm p-[4px_32px] rounded-md border border-transparent hover:bg-black hover:text-white hover:border-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
