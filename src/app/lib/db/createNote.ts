import { notesTable, Note } from "@/db/schema";
import db from "@/db";

export default async function createNote(
  title: string,
  body: string
): Promise<Note | void> {
  try {
    const note = await db
      .insert(notesTable)
      .values({ title, body })
      .returning();
    return note[0];
  } catch (error) {
    console.error("Something went wrong when creating this note.");
    console.error(error);
  }
}
