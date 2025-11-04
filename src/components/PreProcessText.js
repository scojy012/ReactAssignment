// import the react library, styling from App.css and tunes from tunes.js
import React, { useState, useEffect } from 'react';
import '../App.css';
import { stranger_tune } from '../tunes';
// declare function component PreProcessText with props defaultValue and onChange which are passed from App.js
// the defaultValue is used to set change the initial text in the textarea and useEffect to handle changes
function PreProcessText({ defaultValue, onChange }) {
    
    const [TextCollapsed, setTextCollapsed] = useState(false);
    const toggleCollapse = () => {
        setTextCollapsed(!TextCollapsed);
    };
// Used ternary operator to set className for collapse textarea
    return (
        <div className="PreprocessText-container" style={{ padding: '20px', margin: '20px 0' }}>
                <div className="Preprocess-card-header"  id="headingPreprocess">
                    <button className="btn bg-dark w-100 text-start form-label"
                            type="button"
                            onClick={toggleCollapse}
                            aria-expanded={!TextCollapsed}
                            aria-controls="collapsePreprocess">
                            <h4>Preprocess Text 📄⬇️</h4>
                    </button>
                </div>
                <div 
                    id="collapsePreprocess" 
                    className={`collapse ${!TextCollapsed ? 'show' : ''}`}
                    aria-labelledby="headingPreprocess">
                    <div className="card-body">
                    <textarea className="form-control bg-primary text-white" 
                            rows="25" 
                            onChange={onChange}
                            defaultValue={defaultValue}
                            id="proc"
                        />
                    </div>
                </div>
            </div>
    );
}

export default PreProcessText;