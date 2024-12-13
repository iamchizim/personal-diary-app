import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Entry } from '../utils/diary';

interface DiaryFormProps {
  refreshEntries: () => void;
}

const DiaryForm: React.FC<DiaryFormProps> = ({ refreshEntries }) => {
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddEntry = (event: React.FormEvent) => {
    event.preventDefault();
    const newEntry = new Entry(category, date, title, body);
    Entry.addEntry(newEntry);
    refreshEntries();
    setCategory('');
    setDate('');
    setTitle('');
    setBody('');
  };

  const handleTitleChange = (content: string) => {
    setTitle(content);
  };

  const handleBodyChange = (content: string) => {
    setBody(content);
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
        <Editor
          value={title}
          init={{
            menubar: false,
            toolbar: 'bold italic underline | alignleft aligncenter alignright | undo redo',
            inline: true,
          }}
          onEditorChange={handleTitleChange}
        />
        <h4>Body:</h4>
        <Editor
          value={body}
          init={{
            height: 300,
            menubar: false,
            plugins: 'link',
            toolbar: 'bold italic underline | alignleft aligncenter alignright | undo redo | link',
          }}
          onEditorChange={handleBodyChange}
        />
        <button type="submit">Add entry</button>
      </form>
    </section>
  );
};

export default DiaryForm;
