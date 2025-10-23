import React from 'react';
import '../App.css';

function PlayButtons() {
    return (
        <div className="music-controls">
            <h4>👽 Media Player Buttons 🛸</h4> {/* Using the emojis for nice appeal UI */}
            <div className="btn-group-custom" role="group" aria-label="Play and Stop Buttons">
                <button id="play" className="music-btn play-btn" title="Play">
                    ▶ {/* Play Button using the emoji symbol */}
                </button>
                <button id="stop" className="music-btn stop-btn" title="Stop">
                    ⏹ {/* Stop Button using the emoji symbol */}
                </button>
                <button id="process_play" className="music-btn process-btn" title="Process & Play">
                    ⚙️▶ {/* Process & Play Button using the emoji symbol */}
                </button>
                <button id="process" className="music-btn preprocess-btn" title="Preprocess">
                    ♻️ {/* Preprocess Button using the emoji symbol */}
                </button>

                <div class="slideContainer">
                    <input type="range" min="1" max="100" value="1" id="myRange" class="slider"></input>
                    <label>🔉</label>
                </div>



            </div>
        </div>
    );
}

export default PlayButtons; 