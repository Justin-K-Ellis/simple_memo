"use client";

import { useRouter } from "next/navigation";
import deleteNoteAction from "../lib/actions/deleteNoteAction";

interface DeleteBtnProps {
  id: number;
}

export default function DeleteBtn({ id }: DeleteBtnProps) {
  const router = useRouter();

  function handleDelete(id: number) {
    const confirmed = confirm("Are you sure you want to delete this note?");
    if (!confirmed) {
      return;
    }
    deleteNoteAction(id);
    router.push("/");
  }

  return <button onClick={() => handleDelete(id)}>Delete</button>;
}
