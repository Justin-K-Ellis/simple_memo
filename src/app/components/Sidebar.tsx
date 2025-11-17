import { Title } from "@/types";

export interface SideBarProps {
  handleSidebarToggle: () => void;
  titles: Title[];
}

export default function Sidebar({ handleSidebarToggle, titles }: SideBarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-toggle">
        <h2>My Notes</h2>
        <button type="button" onClick={handleSidebarToggle}>
          Close
        </button>
      </div>
      <ul>
        {titles.map((title) => (
          <li key={title.id}>{title.title}</li>
        ))}
      </ul>
    </aside>
  );
}
