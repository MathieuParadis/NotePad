import React from 'react';
import './SingleNote.css'

const SingleNote = (props) => {
  return (
    <>
      <h3 className="display-title">{props.title}</h3>
      <p className="display-text">{props.text}</p>
    </>
  );
}

export default SingleNote

