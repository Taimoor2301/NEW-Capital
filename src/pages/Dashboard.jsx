import React from "react";
import DashboardFilterCard from "../components/filtercards/DashboardFilterCard";
import Pagination from "../components/pagination/Pagination";

export default function Dashboard() {
  return (
    <>
      <DashboardFilterCard />
      <Pagination />
    </>
  );
}
