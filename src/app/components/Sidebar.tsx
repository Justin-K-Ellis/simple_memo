export interface SideBarProps {
  handleSidebarToggle: () => void;
}

export default function Sidebar({ handleSidebarToggle }: SideBarProps) {
  const dummyNotes: string[] = [
    "Cat Facts",
    "Tokyo Restaurants",
    "Movies to See",
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-toggle">
        <h2>My Notes</h2>
        <p className="sidebar-toggle-ctr" onClick={handleSidebarToggle}>
          &lt;
        </p>
      </div>
      <ul>
        {dummyNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}
