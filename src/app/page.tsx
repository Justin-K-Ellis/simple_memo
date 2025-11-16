import db from "../db/index";
import { notesTable } from "@/db/schema";

export default async function Home() {
  const notes = await db.select().from(notesTable);
  console.log(notes);

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
        </div>
      ))}
    </>
  );
}
