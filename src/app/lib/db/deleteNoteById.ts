import { eq } from "drizzle-orm";
import db from "@/db";
import { notesTable } from "@/db/schema";

export default async function deleteNoteById(id: number): Promise<void> {
  await db.delete(notesTable).where(eq(notesTable.id, id));
}
