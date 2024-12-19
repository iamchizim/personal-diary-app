import React, { useState } from "react";
import { Entry } from "../utils/diary";
import RichTextEditor from "./RichTextEditor";

interface DiaryFormProps {
  refreshEntries: () => void;
}

const DiaryForm: React.FC<DiaryFormProps> = ({ refreshEntries }) => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");

  const handleAddEntry = (event: React.FormEvent) => {
    event.preventDefault();
    const editorElement = document.getElementById("editor");
    const body = editorElement ? editorElement.innerHTML : "";
    const newEntry = new Entry(category, date, title, body);
    Entry.addEntry(newEntry);
    refreshEntries();
    setCategory("");
    setDate("");
    setTitle("");

    if (editorElement) {
      editorElement.innerHTML = "";
    }
  };

  return (
    <section>
      <h2>DIARY FORM</h2>
      <form onSubmit={handleAddEntry}>
        <h4>Category:</h4>
        <input
          type="text"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
          placeholder="Input category"
          required
        />
        <h4>Date:</h4>
        <input
          type="text"
          onChange={(event) => setDate(event.target.value)}
          value={date}
          placeholder="Input date"
          required
        />
        <h4>Title:</h4>
        <input
          type="text"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          placeholder="Input title"
          required
        />
        <h4>Body:</h4>
        <RichTextEditor />
        <h4>File:</h4>

        <button type="submit">Add entry</button>
      </form>
    </section>
  );
};

export default DiaryForm;
