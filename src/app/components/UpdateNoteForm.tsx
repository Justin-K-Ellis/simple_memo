"use client";

import { useState } from "react";
import updateNoteAction from "../lib/actions/updateNoteAction";
import { Note } from "@/db/schema";

interface UpdateNoteFormProps {
  id: number;
  note: Note;
}

export default function UpdateNoteForm({ id, note }: UpdateNoteFormProps) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  return (
    <form className="create-note-form">
      <div className="create-note-form-title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="">Body</label>
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        formAction={() => updateNoteAction(id, title, body)}
      >
        Update Note
      </button>
    </form>
  );
}
