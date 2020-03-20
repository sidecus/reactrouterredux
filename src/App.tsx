import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { Page1 } from './page1';
import { Page2 } from './page2';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <ul>
          <li>
            <Link to={'/page1/id/1'}>Page 1</Link>
          </li>
          <li>
            <Link to={'/page2/id/2'}>Page 2</Link>
          </li>
        </ul>
      </div>
      <div>
        <Route path='/page1/id/:id' component={Page1} />
        <Route path='/page2/id/:id' component={Page2} />
      </div>
    </div>
  );
}

export default App;
