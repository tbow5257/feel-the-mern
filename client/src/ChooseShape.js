import React, { useContext } from 'react';
import { StoreContext } from './CheckboardContext';

function ChooseShape({region}) {
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
                        name="Shape"
                        value="shape1"
                        className="form-check-input"
                        checked={input === "shape1"}
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
                        value="shape2"
                        className="form-check-input"
                        checked={input === "shape2"}
                        onChange={handleChange}
                    />
                    Triangle
                </label>
        </div>
    </div>
  </form>
)}

export default ChooseShape;