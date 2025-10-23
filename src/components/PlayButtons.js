import React from 'react';
import '../App.css';

function PlayButtons() {
    return (
        <div className="music-controls">
            <h4>👽 Music Controls 🛸</h4> {/* Using the emojis for nice appeal UI */}
            <div className="btn-group-custom" role="group" aria-label="Play and Stop Buttons">
                <button id="play" className="music-btn play-btn" title="Play">
                    ▶ {/* Play Button using the emoji symbol */}
                </button>
                <button id="stop" className="music-btn stop-btn" title="Stop">
                    ⏹ {/* Stop Button using the emoji symbol */}
                </button>
                <button id="process_play" className="music-btn process-btn" title="Process & Play">
                    🔄▶ {/* Process & Play Button using the emoji symbol */}
                </button>
            </div>
        </div>
    );
}

export default PlayButtons; 