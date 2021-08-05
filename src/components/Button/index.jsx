import React from 'react';
import './Button.css'

const NoteDisplay = (props) => {
  return (
    <button className="button" type="button" onClick={props.onClick}>{props.action}</button>
  );
}

export default NoteDisplay

