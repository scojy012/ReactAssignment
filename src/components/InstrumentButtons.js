import React, { useState, useEffect } from 'react';
import '../App.css';
import { ProcAndPlay } from '../App.js'; // Import ProcAndPlay function

function InstrumentButtons() {

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

    return (
        <>
        <div className="Instrument-selection">
                <h4>👾 Instruments 🕹️</h4>
                    <div className="btn-instrument-group" role="group" aria-label="Instrument Selection">
                            {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={ProcAndPlay} defaultChecked /> */}
                            {/* <label className="form-check-label" htmlFor="flexRadioDefault1"> p1: ON </label> */}
                            {/* <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={ProcAndPlay} /> */}
                            {/* <label className="form-check-label" htmlFor="flexRadioDefault2">p1: HUSH </label> */}
                            <button className={`btn ${drumsMuted ? '🥁🔇' : '🥁🔊'}`} onClick={toggleDrums}>
                                {drumsMuted ? '🥁🔊' : '🥁🔇'}
                            </button>

                    </div>
        </div>
        </>
    );
}
export default InstrumentButtons; 