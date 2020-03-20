import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { RouterPage } from './page';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
            <Link to={'/page1/id/1'}>Page 1</Link>
            <Link to={'/page2/id/2'}>Page 2</Link>
      </div>
      <div className='App-body'>
        <Route
          exact={true}
          path='/page1/id/:id'
          render={(props: any) => <RouterPage {...props} pageId = {1} pageName = 'Page One'/>}
        />
        <Route
          exact={true}
          path='/page2/id/:id'
          render={(props: any) => <RouterPage {...props} pageId = {2} pageName = 'Page Two'/>}
        />
      </div>
    </div>
  );
}

export default App;
