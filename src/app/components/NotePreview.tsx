import type { Note } from "@/db/schema";

export default function NotePreview({ note }: { note: Note }) {
  return (
    <div className="note-preview">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <hr />
    </div>
  );
}
