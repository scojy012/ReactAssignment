import React, { useState, useEffect } from 'react';
import '../App.css';

function PlayButtons() {
    const [volume, setVolume] = useState(50);

    // Function to handle volume change
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        
        // Apply volume to audio context if it exists
        try {
            const audioContext = window.getAudioContext && window.getAudioContext();
            if (audioContext && audioContext.destination) {
                // Set volume (0.0 to 1.0)
                const volumeValue = newVolume / 100;
                
                // You might need to adjust this based on how Strudel handles audio
                if (window.globalEditor && window.globalEditor.audioContext) {
                    window.globalEditor.audioContext.destination.gain = volumeValue;
                }
            }
        } catch (error) {
            console.log('Volume control not available yet');
        }
    };

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

                <div className="slideContainer" title="Adjust Volume">
                    <label htmlFor="myRange">🔉 {volume}%</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={volume}
                        onChange={handleVolumeChange}
                        id="myRange" 
                        className="slider"
                    />
                </div>
            </div>
        </div>
    );
}

export default PlayButtons; 