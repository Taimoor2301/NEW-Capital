import React from "react";
import useAuth from "../Context/AuthContext";
import ResponsiveDrawer from "../components/navbar/HorizantalNavbar";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <>
      <ResponsiveDrawer Page={Outlet} />
    </>
  ) : (
    <Navigate to={"/page/home"} />
  );
}
