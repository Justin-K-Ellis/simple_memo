import { SideBarProps } from "./Sidebar";

export default function SidebarCollapsed({
  handleSidebarToggle,
}: SideBarProps) {
  return (
    <aside className="sidebar-collapsed">
      <button type="button" onClick={handleSidebarToggle}>
        Open
      </button>
    </aside>
  );
}
