import React, { useState, useEffect } from 'react';
import '../App.css';

function Editor() {

    const [EditorCollapsed, setEditorCollapsed] = useState(false);
    const toggleCollapse = () => {
        setEditorCollapsed(!EditorCollapsed);
    };

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