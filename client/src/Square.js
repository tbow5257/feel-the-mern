import React from 'react';

function Square(props) {
    console.log('props', props)
    return (
        <div row={props.row} className={props.btype}>
            --
        </div>
    );
}

export default Square;
