// import the React library and useState, useEffect
// import styling from App.css
import React, { useState, useEffect } from 'react';
import '../App.css';

// declare function component Editor
function Editor() {
// use useState to create a state variable EditorCollapsed and its setter function setEditorCollapsed
    const [EditorCollapsed, setEditorCollapsed] = useState(false);
    // function to toggle the collapse state
    const toggleCollapse = () => {
        setEditorCollapsed(!EditorCollapsed);
    };
// the EditorCollapsed will control the collapse behavior of the editor section
// by using the toggleCollapse function on button click
// used a ternary operator to set the className for collapse behavior
    return (
        <>
            <div className="editor-container" style={{ padding: '20px', margin: '20px 0' }}>
                <div className= "editor-card-header" id="headingEditor">
                    <button className="btn bg-dark w-100 text-start form-label"
                        type="button"
                        onClick={toggleCollapse}
                        aria-expanded={!EditorCollapsed}
                        aria-controls="collapseEditor">
                        <h4> Editor & Output 📟⬇️</h4>
                    </button>
                    </div>
                    <div 
                        id="collapseEditor" 
                        className={`collapse ${!EditorCollapsed ? 'show' : ''}`}
                        aria-labelledby="headingEditor">
                    <div className = "card-body">
                    <div className="col-md-12" style={{ maxHeight: '100vh', overflowY: 'auto', padding: '10px' }}>
                                    <div id="editor" />
                                    <div id="output" />
                                </div>
                    </div>
                    </div>
            </div>
        </>
    );
} 
export default Editor;