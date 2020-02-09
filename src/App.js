import React from 'react';
import WorkList from './work/WorkList';
import './App.css';


function App() {
  return (
      <div>
        <h1>My Frontend Challenge</h1>
        <p className="description">Here are some frontend projects that I have been working on</p>
        <WorkList />
      </div>
  );
}

export default App;
