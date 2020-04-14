import React, { Fragment, useContext } from 'react';
import { CheckboardContextConsumer } from './CheckboardContext';
import './App.css';

function Shape(props) {
    return (
        <CheckboardContextConsumer>
            { (m) => (
                    <div className={props.shapeType}>
                    --
                    </div>
                )
            }
        </CheckboardContextConsumer>
    );
}

export default Shape;
