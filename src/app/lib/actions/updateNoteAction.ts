"use server";

import { redirect } from "next/navigation";
import updateNote from "../db/updateNote";

export default async function updateNoteAction(
  id: number,
  title: string,
  body: string
): Promise<void> {
  try {
    await updateNote(id, title, body);
  } catch (error) {
    console.error(`Something went wrong when updating note ${id}.`);
    console.error(error);
  } finally {
    redirect("/");
  }
}
