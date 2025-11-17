"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarCollapsed from "./SidebarCollapsed";
import useGetNoteTitles from "../lib/hooks/useGetNoteTitles";

export default function SidebarContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { titles, loading, error } = useGetNoteTitles();

  function handleSidebarToggle() {
    if (sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      {sidebarOpen ? (
        <Sidebar titles={titles} handleSidebarToggle={handleSidebarToggle} />
      ) : (
        <SidebarCollapsed
          titles={titles}
          handleSidebarToggle={handleSidebarToggle}
        />
      )}
    </>
  );
}
