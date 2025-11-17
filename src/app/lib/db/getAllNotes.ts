import db from "../../../db/index";
import { notesTable, Note } from "@/db/schema";

export default async function getAllNotes(): Promise<Note[]> {
  const notes = await db.select().from(notesTable);
  return notes;
}
