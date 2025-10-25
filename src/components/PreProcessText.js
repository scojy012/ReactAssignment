import React, { useState, useEffect } from 'react';
import '../App.css';
import { stranger_tune } from '../tunes';

function PreProcessText() {
    const [TextCollapsed, setTextCollapsed] = useState(false);

    const toggleCollapse = () => {
        setTextCollapsed(!TextCollapsed);
    };

    return (
        <div className="col-md-12" style={{ padding: '20px', margin: '20px 0' }}>
            <div className="card">
                <div className="card-header" id="headingPreprocess">
                    <h5 className="mb-0">
                        <button 
                            className="btn btn-link text-decoration-none w-100 text-start form-label"
                            type="button"
                            onClick={toggleCollapse}
                            aria-expanded={!TextCollapsed}
                            aria-controls="collapsePreprocess"
                        >
                            Text to preprocess:
                        </button>
                    </h5>
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
                            id="proc"
                            defaultValue={stranger_tune}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreProcessText;