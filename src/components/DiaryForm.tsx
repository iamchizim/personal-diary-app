import React from "react";
import { useState } from "react";
import { Entry } from "../utils/diary";

interface DiaryFormProps {
  refreshEntries: () => void;
}
const DiaryForm: React.FC<DiaryFormProps> = ({ refreshEntries }) => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddEntry = (event: React.FormEvent) => {
    event.preventDefault();
    const newEntry = new Entry(category, date, title, body);
    Entry.addEntry(newEntry);
    refreshEntries();
    setCategory("");
    setDate("");
    setTitle("");
    setBody("");
  };

  return (
    <section>
      <form onSubmit={handleAddEntry}>
        <h2>DIARY FORM</h2>
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
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="Input body of text"
          required
        ></textarea>
        <button type="submit">Add entry</button>
      </form>
    </section>
  );
};
export default DiaryForm;
