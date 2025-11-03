import React, { useState, useEffect } from 'react';
import '../App.css';

function PlayButtons({ onPlay, onStop }) {
    return (
        <div className="music-controls">
            <h4>👽 Media Player 🛸</h4> {/* Using the emojis for nice appeal UI */}
            <div className="btn-group-custom" role="group" aria-label="Play and Stop Buttons">
                <button id="play" className="music-btn play-btn" onClick={onPlay} title="Play">
                    ▶ {/* Play Button using the emoji symbol */}
                </button>
                <button id="stop" className="music-btn stop-btn" onClick={onStop} title="Stop">
                    ⏹ {/* Stop Button using the emoji symbol */}
                </button>
                <button id="process_play" className="music-btn process-btn" title="Process & Play">
                    ⚙️▶ {/* Process & Play Button using the emoji symbol */}
                </button>
                <button id="process" className="music-btn preprocess-btn" title="Preprocess">
                    ♻️ {/* Preprocess Button using the emoji symbol */}
                </button>
            </div>
        </div>
    );
}

export default PlayButtons; 