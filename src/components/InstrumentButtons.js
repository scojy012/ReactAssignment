// import the react libarary, useState and useEffect from react
// import styling from App.css
import React, { useState, useEffect } from 'react';
import '../App.css';
import { ProcAndPlay } from '../App.js'; // Import ProcAndPlay function for re-processing and playing

function InstrumentButtons({volume, onVolumeChange}) {

    




    const [drumsMuted, setDrumsMuted] = useState(false); // State to track if drums are muted
    const toggleDrums = () => {
        setDrumsMuted(!drumsMuted);

        // Get the current text from the preprocess textarea
        let proc_text = document.getElementById('proc').value;

        if (!drumsMuted) {
            // Mute drums by adding "_" in front of drums and drums2 sections
            proc_text = proc_text.replace(/drums:/g, '_drums:');
            proc_text = proc_text.replace(/drums2:/g, '_drums2:');
        }
        else {
            // Unmute drums by removing "_" from drums and drums2 sections
            proc_text = proc_text.replace(/_drums:/g, 'drums:');
            proc_text = proc_text.replace(/_drums2:/g, 'drums2:');  
        }

        //Update the preprocess text
        document.getElementById('proc').value = proc_text;

        // Re-process and play the updated text
        ProcAndPlay();
    };

    // used ternary operator to display different button content based on drumsMuted state
    return (
        <>
        <div className="Instrument-selection">
                <h4>👾 Instruments 🕹️</h4>
                    <div className="btn-instrument-group" role="group" aria-label="Instrument Selection">
                            <button className="music-btn drums-btn" onClick={toggleDrums} title={drumsMuted ? 'Unmute Drums' : 'Mute Drums'}>
                                {drumsMuted ? '🥁🔊' : '🥁🔇'}
                            </button>
                            <label className="form-label">Volume</label>
                            <input type="range" className="form-range volume-slider" min="0" max="2" step="0.1" value={volume} onChange={onVolumeChange} id="volumeSlider"/> 

                    </div>
        </div>
        </>
    );
}
export default InstrumentButtons; 