import React, { useState } from 'react';
import './App.css';
import Square from './Square'


const makeBoard = (size) => {

  const matrix = Array(size).fill().map((v, i) => {
                      if (i%2 == 0){
                        return evenRow(size, i)
                      } else {
                        return oddRow(size, i)
                      }
                    })
                    
  return matrix;

  function evenRow(size, rowNum) {
    const row = Array(size).fill().map((v, i) => {
      if (i%2 == 0){
        return <Square btype="blacksquare" row={rowNum}/>
      } else {
        return <Square btype="whitesquare" row={rowNum}/>
      }
    });
  
    return <div className="Checker-Row">{row}</div>
  };
  
  function oddRow(size, rowNum) {
    const row = Array(size).fill().map((v, i) => {
      if (i%2 == 0){
        return <Square btype="whitesquare" row={rowNum}/>
      } else {
        return <Square btype="blacksquare" row={rowNum}/>
      }
    });
  
    return <div className="Checker-Row">{row}</div>
  };
  
};


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
    <div className="App">
      <header className="App-header">
        <div className="Grid">{makeBoard(size)}</div>
        <p>To change checkerboard, enter number and click submit </p>
        <input type="text" name="size" onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
