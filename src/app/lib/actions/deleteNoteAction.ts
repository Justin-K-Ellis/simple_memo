"use server";
import { revalidatePath } from "next/cache";
import deleteNoteById from "../db/deleteNoteById";

export default async function deleteNoteAction(
  id: number
): Promise<void | Error> {
  try {
    await deleteNoteById(id);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw new Error(`Something went wrong when deleting note ${id}.`);
  }
}
