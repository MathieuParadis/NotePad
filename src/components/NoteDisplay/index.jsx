import React from 'react';
import Markdown from 'components/Markdown';
import './NoteDisplay.css'

const NoteDisplay = (props) => {
  return (
    <>
      <h1 className="display-title">{props.title}</h1>
      <div className="display-text"><Markdown input={props.text}/></div>
    </>
  );
}

export default NoteDisplay

