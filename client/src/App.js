import React, {useEffect, useState} from 'react';
import './App.css';
import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const BlackSquare = () => <div className="blacksquare">B</div>;
const WhiteSquare = () => <div className="whitesquare">W</div>;


const makeBoard = (size) => {

  const bColumn = (size) => {
    const row = Array(size).fill().map((v, i) => {
      if (i%2 == 0){
        return <BlackSquare/>
      } else {
        return <WhiteSquare/>
      }
    });
  
    return <div>{row}</div>
  };
  
  const wColumn = (size) => {
    const row = Array(size).fill().map((v, i) => {
      if (i%2 == 0){
        return <WhiteSquare/>
      } else {
        return <BlackSquare/>
      }
    });
  
    return <div>{row}</div>
  };
  
  function generate(size) {
    const matrix = Array(size).fill().map((v, i) => {
                      if (i%2 == 0){
                        return bColumn(size)
                      } else {
                        return wColumn(size)
                      }
                    })
    
    return matrix;
  };

  return generate(size);
}

const bColumn = () => {
  const row = Array(5).fill().map((v, i) => {
    if (i%2 == 0){
      return <BlackSquare/>
    } else {
      return <WhiteSquare/>
    }
  });

  return <div>{row}</div>
};

const wColumn = () => {
  const row = Array(5).fill().map((v, i) => {
    if (i%2 == 0){
      return <WhiteSquare/>
    } else {
      return <BlackSquare/>
    }
  });

  return <div>{row}</div>
};

function generate() {
  const matrix = Array(5).fill().map((v, i) => {
                    if (i%2 == 0){
                      return bColumn()
                    } else {
                      return wColumn()
                    }
                  })
  
  return matrix;
};

console.log(generate())
console.log(wColumn)

function App() {

  // useEffect(
  //   () => {
  //     async function getData() {
  //       await axios.get('http://172.18.0.3:8080/user')
  //         .then(res => console.log('res ', res))
  //         .catch(err => console.log('err ', err));
  //     }
  
  //     getData();
  //   },
  //   []
  // );

  const [value, setValue] = useState(8);
  const [size, setSize] = useState(value);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    setSize(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
