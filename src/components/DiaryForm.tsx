import React from "react";
import { useState } from "react";
import { Entry } from "../utils/diary";
const DiaryForm = () => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddEntry = (event: React.FormEvent) => {
    event.preventDefault();
    const newEntry = new Entry(date, title, body);
    Entry.addEntry(newEntry);
    setDate("");
    setTitle("");
    setBody("");
  };

  return (
    <section>
      <form onSubmit={handleAddEntry}>
        <h2>DIARY FORM</h2>
        <h4>Date:</h4>
        <input type="text" value={date} placeholder="Input date" required/>
        <h4>Title:</h4>
        <input type="text" value={title} placeholder="Input title" required />
        <h4>Body:</h4>
        <input type="text" value={body} placeholder="Input body"  required/>
        <button type="submit">Add entry</button>
      </form>
    </section>
  );
};
export default DiaryForm;
