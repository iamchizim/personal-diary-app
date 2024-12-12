import React from "react";
import { Entry } from "../utils/diary";
import { Link } from "react-router-dom";
import _ from "lodash";
interface EntryListProps {
  entries: Entry[];
  deleteEntry: (id: string) => void;
}
const DiaryList: React.FC<EntryListProps> = ({ entries, deleteEntry }) => {
  const categorizedEntries = _.groupBy(entries, "category");
  return (
    <section>
      {Object.keys(categorizedEntries).map((category) => (
        <div key={category}>
          <h4>{category}</h4>
          <ul>
            {categorizedEntries[category].map((entry) => (
              <li key={entry.id}>
                {entry.title}
                <Link to={`/DiaryDetails/${entry.id}`} state={{ entry }}>
                  Read More
                </Link>
                <button onClick={() => deleteEntry(entry.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
export default DiaryList;
