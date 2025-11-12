"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarCollapsed from "./SidebarCollapsed";

export default function SidebarContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleSidebarToggle() {
    if (sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }

  return (
    <>
      {sidebarOpen ? (
        <Sidebar handleSidebarToggle={handleSidebarToggle} />
      ) : (
        <SidebarCollapsed handleSidebarToggle={handleSidebarToggle} />
      )}
    </>
  );
}
