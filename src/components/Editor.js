import React, { useState, useEffect } from 'react';
import '../App.css';

function Editor() {
    return (
        <>
        <div className="col-md-12" style={{ maxHeight: '100vh', overflowY: 'auto', padding: '10px' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
        </>
    );
} 
export default Editor;