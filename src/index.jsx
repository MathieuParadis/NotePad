import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput';
import Button from 'components/Button';
import NavbarNotesDisplay from 'components/NavbarNotesDisplay'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div className="App d-flex">
    <div className="Navbar col-3" id="test">
      <Button action='New note'/>
      <NavbarNotesDisplay />
    </div>
    <div className="Note col-9">
      <MarkdownInput/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));