import React from 'react';
import '../App.css';

function PlayButtons() {
    return (
        <div className="music-controls">
            <h4>👽 Music Controls 🛸</h4>
            <div className="btn-group-custom" role="group" aria-label="Play and Stop Buttons">
                <button id="play" className="music-btn play-btn">
                    ▶️
                </button>
                <button id="stop" className="music-btn stop-btn">
                    ⏹️
                </button>
            </div>
        </div>
    );
}

export default PlayButtons; 