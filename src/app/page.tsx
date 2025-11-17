import getAllNotes from "./lib/db/getAllNotes";

export default async function Home() {
  const notes = await getAllNotes();

  return (
    <>
      {notes.map((note) => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <p>Posted: {note.createdAt.toISOString()}</p>
          {note.updatedAt !== null && (
            <p>Update: {note.updatedAt.toISOString()}</p>
          )}
          <hr />
        </div>
      ))}
    </>
  );
}
