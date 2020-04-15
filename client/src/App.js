import React, { useState } from 'react';
import './App.css';
import Square from './Square'
import CheckboardContextProvider from './CheckboardContext';
import Colors from './Colors';

const makeBoard = (size) => {

  const matrix = Array(size).fill().map((v, i, t) => {
                      if (i%2 == 0){
                        return evenRow(size, i)
                      } else {
                        return oddRow(size, i)
                      }
                    })

  return matrix;

  function shapeRows(){
    const collection = new Set();

    collection.add(0,1);
    collection.add(size-1);
    collection.add(size);
  }

  function evenRow(size, rowNum) {
    const row = Array(size).fill().map((v, i, t) => {
      const size = t.length;
      if (i%2 == 0){
        return <Square btype="blacksquare" row={rowNum} totalSize={size}/>
      } else {
        return <Square btype="whitesquare" row={rowNum} totalSize={size}/>
      }
    });
  
    return <div className="Checker-Row">{row}</div>
  };
  
  function oddRow(size, rowNum) {
    const row = Array(size).fill().map((v, i, t) => {
      const size = t.length;
      if (i%2 == 0){
        return <Square btype="whitesquare" row={rowNum} totalSize={size}/>
      } else {
        return <Square btype="blacksquare" row={rowNum} totalSize={size}/>
      }
    });
  
    return <div className="Checker-Row">{row}</div>
  };
  
};


function App() {

  const [colors, setColors] = useState("default");
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
