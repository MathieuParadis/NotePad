import React from 'react';
import NoteDisplay from 'components/NoteDisplay';
import Button from 'components/Button';
import './MarkdownInput.css';

const MarkdownInput = () => {
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div class="d-flex flex-column">
      <div class="display">
        <NoteDisplay title={title} text={text}/>
      </div>
      <div class="input-div d-flex flex-column">
        <input class="input mb-4 py-2" value={title} onChange={onTitleChange} />
        <textarea class="input mb-4 py-2" rows="10" value={text} onChange={onTextChange} ></textarea>
        <Button action='Save'/>
      </div>
    </div>
  );
}

export default MarkdownInput

