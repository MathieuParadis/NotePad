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

  const handleSave = () => {
    title.length > 0 ? console.log(title) : alert('no title')
    localStorage.setItem(JSON.stringify(title), JSON.stringify(text));
  };

  return (
    <div className="d-flex flex-column">
      <div className="display text-white">
        <NoteDisplay title={title} text={text}/>
      </div>
      <div className="input-div d-flex flex-column">
        <input className="input mb-4 py-2" value={title} onChange={onTitleChange}/>
        <textarea className="input mb-4 py-2" rows="10" value={text} onChange={onTextChange}></textarea>
        <Button action='Save' onClick={handleSave}/>
      </div>
    </div>
  );
}

export default MarkdownInput

