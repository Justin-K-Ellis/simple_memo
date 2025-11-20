import UpdateNoteForm from "@/app/components/UpdateNoteForm";
import getNoteById from "@/app/lib/db/getNoteById";
import { Note } from "@/db/schema";

export default async function Update({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note: Note = await getNoteById(parseInt(id));
  return (
    <>
      <h1>Update Note</h1>
      <UpdateNoteForm id={parseInt(id)} note={note} />
    </>
  );
}
