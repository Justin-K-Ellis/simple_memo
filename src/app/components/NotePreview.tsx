import Link from "next/link";
import type { Note } from "@/db/schema";

export default function NotePreview({ note }: { note: Note }) {
  return (
    <Link href={`/notes/${note.id}`}>
      <div className="note-preview">
        <h2>{note.title}</h2>
        <p>{note.body}</p>
        <hr />
      </div>
    </Link>
  );
}
