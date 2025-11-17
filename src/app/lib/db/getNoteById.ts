import { eq } from "drizzle-orm";
import db from "../../../db/index";
import { notesTable, Note } from "@/db/schema";

export default async function getNoteById(id: number): Promise<Note> {
  const note = await db.select().from(notesTable).where(eq(notesTable.id, id));
  return note[0];
}
