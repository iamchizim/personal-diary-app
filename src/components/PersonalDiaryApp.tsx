
import { useState, useEffect } from "react";
import { Entry } from "../utils/diary";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import DiarySearch from "./DiarySearch";

const PersonalDiaryApp = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    setEntries(Entry.getDiaryEntries);
  }, []);

  const refreshEntries = () => {
    setEntries(Entry.getDiaryEntries());
  };

  const deleteEntry = (id: string) => {
    Entry.deleteEntry(id);
    refreshEntries()
  };
  
  return (
    <section>
      <DiaryForm refreshEntries={refreshEntries} />
      <DiaryList entries={entries} deleteEntry={deleteEntry} />
      <DiarySearch />
    </section>
  );
};
export default PersonalDiaryApp;
