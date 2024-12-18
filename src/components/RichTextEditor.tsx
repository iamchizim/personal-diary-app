import React from 'react';

const RichTextEditor = () => {
  const execCmd = (command: string, value?: string) => {
    document.execCommand(command, false, value ?? undefined);
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={() => execCmd('bold')}>Bold</button>
        <button onClick={() => execCmd('italic')}>Italic</button>
        <button onClick={() => execCmd('underline')}>Underline</button>
        <button onClick={() => execCmd('insertOrderedList')}>Ordered List</button>
        <button onClick={() => execCmd('insertUnorderedList')}>Unordered List</button>
        <button onClick={() => execCmd('createLink', prompt('Enter URL:', 'http://') || undefined)}>Insert Link</button>
        <button onClick={() => execCmd('unlink')}>Remove Link</button>
      </div>
      <div
        id="editor"
        className="editor"
        contentEditable="true"
        style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}
      ></div>
    </div>
  );
};

export default RichTextEditor;
