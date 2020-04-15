import React, { useContext } from 'react';
import { StoreContext } from './CheckboardContext';

function Colors({region}) {
    const {[region]: [data, setData], } = React.useContext(StoreContext)
    const [input, setInput] = React.useState(data)

    const handleChange = (e) => {
        setInput(e.target.value);
        setData(e.target.value);
    };
    
    return (
    <form>
        <div>
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name="Colors"
                        value="red-circle"
                        className="form-check-input"
                        checked={input === "red-circle"}
                        onChange={handleChange}
                    />
                Red
                </label>
            </div>
            
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name="Colors"
                        value="black-circle"
                        className="form-check-input"
                        checked={input === "black-circle"}
                        onChange={handleChange}
                    />
                    Black
                </label>
        </div>
    </div>
  </form>
)}

export default Colors;