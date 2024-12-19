import React, { useRef } from 'react';

const RichTextEditor = () => {
  const editorRef = useRef(null);

  const execCmd = (command: string, value?: string) => {
    document.execCommand(command, false, value ?? undefined);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, command: string, value?: string) => {
    event.preventDefault();
    execCmd(command, value);
  };

  return (
    <div>
      <div className="toolbar">
        <button type="button" onClick={(event) => handleButtonClick(event, 'bold')}>Bold</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'italic')}>Italic</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'underline')}>Underline</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'insertOrderedList')}>Ordered List</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'insertUnorderedList')}>Unordered List</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'createLink', prompt('Enter URL:', 'http://') || undefined)}>Insert Link</button>
        <button type="button" onClick={(event) => handleButtonClick(event, 'unlink')}>Remove Link</button>
      </div>
      <div
        id="editor"
        ref={editorRef}
        className="editor"
        contentEditable="true"
        style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}
      ></div>
    </div>
  );
};

export default RichTextEditor;

