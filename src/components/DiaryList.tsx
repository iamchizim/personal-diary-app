import React from "react";
import { Entry } from "../utils/diary";
import lin

interface EntryListProps {
    entries: Entry[];
    deleteEntry: (id: string) => void;
  }
const DiaryList: React.FC<EntryListProps> =({entries, deleteEntry}) =>{
return(
    <section>

    </section>
)
}
export default DiaryList;