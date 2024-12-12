import { generateId } from "./generateId";
export class Entry {
  id: string;
  category: string;
  date: string;
  title: string;
  body: string;

  constructor(category: string, date: string, title: string, body: string) {
    this.id = generateId();
    this.category = category;
    this.date = date;
    this.title = title;
    this.body = body;
  }

  static getDiaryEntries(): Entry[] {
    const entriesJson = localStorage.getItem("entries");
    return entriesJson ? JSON.parse(entriesJson) : [];
  }

  static addEntry(newEntry: Entry): void {
    const entryArray = this.getDiaryEntries();
    entryArray.push(newEntry);
    localStorage.setItem("entries", JSON.stringify(entryArray));
  }

  static deleteEntry(id: string): void {
    const entryArray = this.getDiaryEntries();
    const updatedEntryArray = entryArray.filter((entry) => entry.id !== id);
    localStorage.setItem("entries", JSON.stringify(updatedEntryArray));
  }

  static searchEntry(query: string): Entry[] {
    const entryArray = this.getDiaryEntries();
    return entryArray.filter((entry) =>
      entry.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  static updateEntry(
    id: string,
    updatedDate: string,
    updatedTitle: string,
    updatedBody: string
  ): Entry | null {
    const entryArray = this.getDiaryEntries();
    const entryIndex = entryArray.findIndex((entry) => entry.id === id);

    if (entryIndex !== -1) {
      entryArray[entryIndex].date = updatedDate;
      entryArray[entryIndex].title = updatedTitle;
     entryArray[entryIndex].body = updatedBody;

      localStorage.setItem("entries", JSON.stringify(entryArray));

      return entryArray[entryIndex];
    } else {
      return null;
    }
  }
}
