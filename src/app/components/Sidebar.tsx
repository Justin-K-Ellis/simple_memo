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
        <button type="button" onClick={handleSidebarToggle}>
          Close
        </button>
      </div>
      <ul>
        {dummyNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}
