import React from 'react';
import './Button.css'

const NoteDisplay = ({action}) => {
  return (
    <button class="button" type="button">{action}</button>
  );
}

export default NoteDisplay

