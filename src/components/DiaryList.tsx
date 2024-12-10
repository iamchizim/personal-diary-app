import React from "react";
import { Entry } from "../utils/diary";
import { Link } from "react-router-dom";

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
          <button onClick={() => deleteEntry}>Delete</button>
          <Link to={`DiaryDetails${entry.date}`} state={{ entry }}>
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
};
export default DiaryList;
