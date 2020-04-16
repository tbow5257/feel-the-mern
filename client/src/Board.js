import React from 'react';
import Square from './Square'

const makeBoard = (size) => {

    const matrix = Array(size).fill().map((v, i, t) => {
                        if (i%2 == 0){
                          return evenRow(size, i)
                        } else {
                          return oddRow(size, i)
                        }
                      })
  
    return matrix;
  
    function evenRow(size, rowNum) {
      const row = Array(size).fill().map((v, i, t) => {
        const size = t.length;
        if (i%2 === 0){
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
        if (i%2 === 0){
          return <Square btype="whitesquare" row={rowNum} totalSize={size}/>
        } else {
          return <Square btype="blacksquare" row={rowNum} totalSize={size}/>
        }
      });
    
      return <div className="Checker-Row">{row}</div>
    };
    
  };

  export default makeBoard;