"use client";

import { useState } from "react";
import createNoteAction from "../lib/actions/createNoteAction";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <>
      <h1>Create a Note</h1>
      <form>
        <div>
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
        <button type="submit" formAction={createNoteAction}>
          Create Note
        </button>
      </form>
    </>
  );
}
