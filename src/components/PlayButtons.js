import React, { useState, useEffect } from 'react';
import '../App.css';

function PlayButtons({ onPlay, onStop }) {
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);
    const [previousVolume, setPreviousVolume] = useState(50);

    // Function to apply volume to audio context
    const applyVolume = (volumeValue) => {
        try {
            const audioContext = window.getAudioContext && window.getAudioContext();
            if (audioContext && audioContext.destination) {
                // Set volume (0.0 to 1.0)
                const normalizedVolume = volumeValue / 100;
                
                // You might need to adjust this based on how Strudel handles audio
                if (window.globalEditor && window.globalEditor.audioContext) {
                    window.globalEditor.audioContext.destination.gain = normalizedVolume;
                }
            }
        } catch (error) {
            console.log('Volume control not available yet');
        }
    };

    // Function to toggle mute/unmute
    const toggleMute = () => {
        if (isMuted) {
            // Unmute: restore previous volume
            setVolume(previousVolume);
            setIsMuted(false);
            applyVolume(previousVolume);
        } else {
            // Mute: save current volume and set to 0
            setPreviousVolume(volume);
            setVolume(0);
            setIsMuted(true);
            applyVolume(0);
        }
    };

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

                    <button 
                        className="music-btn volume-btn" 
                        onClick={toggleMute}
                        title={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? "🔇" : "🔊"}
                    </button>
            </div>
        </div>
    );
}

export default PlayButtons; 