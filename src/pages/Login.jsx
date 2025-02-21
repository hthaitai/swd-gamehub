import React from "react";
import { Link } from "react-router-dom";
import Orb from "../css/backgroundLogin";

const Login = () => {
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
        <form>
          <div>
            <label>Email:</label>
            <input
              className="bg-transparent focus:border-white text-white w-full h-10 border-b border-gray-500 focus:outline-none"
              type="email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="bg-transparent focus:border-white text-white w-full h-10 border-b border-gray-500 focus:outline-none"
              type="password"
              required
           
            />
          </div>
         <button className="mt-4 bg-white items-center text-black font-bold text-sm w-32 h-10 rounded-full hover:bg-gray-700 hover:text-white border border-transparent hover:border-white">
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
