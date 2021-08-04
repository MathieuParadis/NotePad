import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownInput from 'components/MarkdownInput';
import Button from 'components/Button';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <div class="App d-flex">
    <div class="Navbar col-3">
      <Button action='New note'/>
    </div>
    <div class="Note col-9">
      <MarkdownInput/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));