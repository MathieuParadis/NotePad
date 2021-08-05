import SingleNote from 'components/SingleNote';
import React from 'react';
import './NavbarNotesDisplay.css'
// import SingleNote from 'components/SingleNote'

const NavbarNotesDisplay = () => {
  let [notes, setNotes] = React.useState('');

  React.useEffect(() => {
    const onChange = () => {
      setNotes(notes + 1);
    };

    onChange();
  }, [notes]);
          

  return (
    <ul className="notes d-flex flex-column list-unstyled">
      {Object.keys(localStorage).map(function(keyName, keyIndex) {
        return (
          <li className="SingleNote" key={keyIndex}><SingleNote title={JSON.parse(keyName)} text={JSON.parse(localStorage.getItem(keyName))} /></li> 
        )
      })}
    </ul>
  );
}

export default NavbarNotesDisplay

