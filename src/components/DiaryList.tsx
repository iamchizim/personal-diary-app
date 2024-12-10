import React from "react";
import { Entry } from "../utils/diary";


interface EntryListProps {
  entries: Entry[];
  deleteEntry: (id: string) => void;
}
const DiaryList: React.FC<EntryListProps> = ({ entries, deleteEntry }) => {
  return (
    <section>
      {entries.map((entry) => (
        <div key={entry.id}>
          <h3>{entry.title}</h3>
          <h4>{entry.date}</h4>
          <p>{entry.body}</p>
          <button onClick={() => deleteEntry}>Delete</button>
        </div>
      ))}
    </section>
  );
};
export default DiaryList;
