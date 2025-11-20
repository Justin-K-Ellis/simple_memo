import { eq } from "drizzle-orm";
import db from "@/db";
import { notesTable } from "@/db/schema";

export default async function updateNote(
  id: number,
  title: string,
  body: string
): Promise<void> {
  await db
    .update(notesTable)
    .set({ title: title, body: body })
    .where(eq(notesTable.id, id));
}
