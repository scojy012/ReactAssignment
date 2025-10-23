import React from 'react';
import '../App.css';

function PlayButtons() {
    return (
        <>
        <div className="btn-group" role="group" aria-label="Play and Stop Buttons">
        <button id="play" className="btn btn-outline-primary">Play</button>
        <button id="stop" className="btn btn-outline-primary">Stop</button>
        </div>
        </>
    );
}

export default PlayButtons; 