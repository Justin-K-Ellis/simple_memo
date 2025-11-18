"use server";

import { redirect } from "next/navigation";
import createNote from "../db/createNote";

export default async function createNoteAction(formData: FormData) {
  const title = formData.get("title")?.toString();
  const body = formData.get("body")?.toString();

  await createNote(title!, body!);
  redirect("/");
}
