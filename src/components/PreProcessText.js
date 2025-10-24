import React, { useState, useEffect } from 'react';
import '../App.css';

function PreProcessText(){
    return(
        <>
        <div className="col-md-12" style={{ overflowY: 'visible', padding: '20px', margin: '20px 0' }}>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text to preprocess:</label>
                        <textarea className="form-control bg-primary text-white" rows="30" id="proc" style={{ marginTop: '10px' }}></textarea>
                    </div>
        </>
    );
} 
export default PreProcessText;