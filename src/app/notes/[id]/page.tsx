import getNoteById from "@/app/lib/db/getNoteById";

export default async function Note({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await getNoteById(parseInt(id));

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <p>Posted: {note.createdAt.toISOString()}</p>
    </div>
  );
}
