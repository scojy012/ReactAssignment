import React, { useState, useEffect } from 'react';
import '../App.css';
import { stranger_tune } from '../tunes';

function PreProcessText({ defaultValue, onChange }) {
    
    const [TextCollapsed, setTextCollapsed] = useState(false);
    const toggleCollapse = () => {
        setTextCollapsed(!TextCollapsed);
    };

    return (
        <div className="PreprocessText-container" style={{ padding: '20px', margin: '20px 0' }}>
            <div className="card">
                <div className="card-header"  id="headingPreprocess">
                        <button 
                            className="btn bg-dark w-100 text-start form-label"
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
                    aria-labelledby="headingPreprocess"
                >
                    <div className="card-body">
                        <textarea 
                            className="form-control bg-primary text-white" 
                            rows="25" 
                            onChange={onChange}
                            defaultValue={defaultValue}
                            id="proc"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreProcessText;