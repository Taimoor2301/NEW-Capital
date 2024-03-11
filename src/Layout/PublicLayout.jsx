import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import VerticalNavbar from "../components/navbar/VerticalNavbar";
import Footer from "../components/footer/Footer";
import useAuth from "../Context/AuthContext";

export default function PublicLayout() {
  const { user } = useAuth();

  return user ? (
    <Navigate to="/user/dashboard" />
  ) : (
    <>
      <VerticalNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
