import React, { useContext } from 'react';
import { StoreContext } from './CheckboardContext';

function chooseShape({region}) {
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
                        value="red-triangle"
                        className="form-check-input"
                        checked={input === "red-triangle"}
                        onChange={handleChange}
                    />
                Circle
                </label>
            </div>
            
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name="Colors"
                        value="black-triangle"
                        className="form-check-input"
                        checked={input === "black-triangle"}
                        onChange={handleChange}
                    />
                    Triangle
                </label>
        </div>
    </div>
  </form>
)}

export default chooseShape;