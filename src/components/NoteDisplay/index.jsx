import React from 'react';
import './NoteDisplay.css'

const NoteDisplay = (props) => {
  return (
    <>
      <h1 class="display-title">{props.title}</h1>
      <p>{props.text}</p>
    </>
  );
}

export default NoteDisplay

