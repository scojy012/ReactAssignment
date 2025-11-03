import React, { useState, useEffect } from 'react';
import '../App.css';
import { ProcAndPlay } from '../App.js'; // Import ProcAndPlay function

function InstrumentButtons() {
    return (
        <>
        <div className="Instrument-selection">
                <h4>👾 Instruments 🕹️</h4>
                    <div className="btn-instrument-group" role="group" aria-label="Instrument Selection">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={ProcAndPlay} defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault1"> p1: ON </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={ProcAndPlay} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">p1: HUSH </label>
                    </div>
        </div>
        </>
    );
}
export default InstrumentButtons; 