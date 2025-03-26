import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Orb from "../css/backgroundLogin";
import productService from "../api/productService";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await productService.login(username, password);
      console.log("Login data:", data);
      localStorage.setItem("token", data.result.token);
      window.dispatchEvent(new Event("tokenChanged")); // 🚀 Thông báo cập nhật UI

      setTimeout(() => navigate("/"), 500);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        marginTop: "60px",
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
      <div
        style={{
          position: "absolute",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: 10,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              className="bg-transparent focus:border-white text-white w-full h-10 border-b border-gray-500 focus:outline-none"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="bg-transparent focus:border-white text-white w-full h-10 border-b border-gray-500 focus:outline-none"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="mt-4 bg-white items-center text-black font-bold text-sm w-32 h-10 rounded-full hover:bg-gray-700 hover:text-white border border-transparent hover:border-white">
            Sign in
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
