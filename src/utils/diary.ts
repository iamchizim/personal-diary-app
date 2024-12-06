import { generateId } from "./generateId";
export class Entry {
  id: string;
  title: string;
  date: string;
  body: string;

  constructor(title: string, date: string, body: string) {
    this.id = generateId();
    this.title = title;
    this.date = date;
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
}
