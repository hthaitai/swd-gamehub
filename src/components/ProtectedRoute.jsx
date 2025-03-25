import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const { role } = jwtDecode(token); // Lấy role từ token

    if (!allowedRoles.includes(role)) {
      return <Navigate to="/unauthorized" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
