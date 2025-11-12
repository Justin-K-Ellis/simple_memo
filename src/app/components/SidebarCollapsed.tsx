import { SideBarProps } from "./Sidebar";

export default function SidebarCollapsed({
  handleSidebarToggle,
}: SideBarProps) {
  return (
    <aside className="sidebar-collapsed">
      <p className="sidebar-toggle-ctr" onClick={handleSidebarToggle}>
        &gt;
      </p>
    </aside>
  );
}
