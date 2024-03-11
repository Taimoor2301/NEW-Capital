import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../Context/AuthContext";

export default function AuthLayout() {
  const { user } = useAuth();
  return user ? <Navigate to="/user/dashboard" /> : <Outlet />;
}
