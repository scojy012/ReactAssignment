// import the react (useState, useEffect) library
// import styling from App.css
import React, { useState, useEffect } from 'react';
import '../App.css';
// declare function for component PlayButtons with props onPlay, onStop, onProcessPlay, and onProcess
function PlayButtons({ onPlay, onStop, onProcessPlay, onProcess }) {
    // return the play buttons with onClick events tied to the respective functions
    return (
        <div className="music-controls">
            <h4>👽 Media Player 🛸</h4>
            <div className="btn-group-custom" role="group" aria-label="Play and Stop Buttons">
                <button id="play" className="music-btn play-btn" onClick={onPlay} title="Play">
                    ▶ 
                </button>
                <button id="stop" className="music-btn stop-btn" onClick={onStop} title="Stop">
                    ⏹ 
                </button>
                <button id="process_play" className="music-btn process-btn" onClick={onProcessPlay} title="Process & Play">
                    ⚙️▶ 
                </button>
                <button id="process" className="music-btn preprocess-btn" onClick={onProcess} title="Preprocess">
                    ♻️ 
                </button>
            </div>
        </div>
    );
}

export default PlayButtons; 