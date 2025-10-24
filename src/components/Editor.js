import React, { useState, useEffect } from 'react';
import '../App.css';

function Editor() {
    return (
        <>
        <div className="col-md-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <div id="editor" />
                        <div id="output" />
                    </div>
        </>
    );
} 
export default Editor;