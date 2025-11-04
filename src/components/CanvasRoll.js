// Importing the React library for creating components and App.css for styling
import React from 'react';
import '../App.css';  

// declare a function componenet (CanvasRoll) and return javascript
// the id="roll" to get the document.getElementById('roll') and
// display the pianoroll on that canvas
function CanvasRoll() {
    return (
        <div className="canvas-container">
            <div>
            <canvas id="roll"></canvas>
            </div>
        </div>
    );
}
export default CanvasRoll;