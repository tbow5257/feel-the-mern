import React, { useState } from 'react';
import './App.css';
import CheckboardContextProvider from './CheckboardContext';
import Colors from './Colors';
import makeBoard from './Board';


function App() {

  const [value, setValue] = useState(8);
  const [size, setSize] = useState(value);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSize(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(Number(e.target.value));
  };

  return (
    <CheckboardContextProvider>
      <div className="App">
        <div className="Grid-Container">
          <div className="Colors-Container">
            <p>Top</p>
            <Colors region="top"/>
          </div>
          <div className="Grid">{makeBoard(size)}</div>
            <div className="Colors-Container">
              <p>Bottom</p>
              <Colors region="bottom"/>
            </div>
        </div>
        <p>To change checkerboard, enter number and click submit</p>
        <input type="text" name="size" onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </CheckboardContextProvider>
  );
}

export default App;
