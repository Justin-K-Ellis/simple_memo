import db from "../../../db/index";
import { notesTable } from "@/db/schema";
import type { Title } from "@/types";

export default async function getAllNoteTitles(): Promise<Title[]> {
  const titles = await db
    .select({ id: notesTable.id, title: notesTable.title })
    .from(notesTable);
  return titles;
}
