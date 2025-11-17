import getAllNotes from "./lib/db/getAllNotes";
import NotePreview from "./components/NotePreview";

export default async function Home() {
  const notes = await getAllNotes();

  return (
    <>
      <h1>Recent Notes</h1>
      {notes.map((note) => (
        <NotePreview key={note.id} note={note} />
      ))}
    </>
  );
}
