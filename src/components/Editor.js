import React, { useState, useEffect } from 'react';
import '../App.css';

function Editor() {
    return (
        <>
        <div className="editor-container">
        <h4> Code Editor & Output Display 📟</h4>
        <div className="col-md-12" style={{ maxHeight: '100vh', overflowY: 'auto', padding: '10px' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
        </div>
        </>
    );
} 
export default Editor;