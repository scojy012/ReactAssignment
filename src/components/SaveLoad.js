
import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

function SaveLoad() {
    
    const handleFileChange = (event) => {
        var fileUpload = event.target.files;
        console.log(fileUpload);
        // if no file selected than return a message
        if(fileUpload.length <= 0){
            alert('');
            return;
        }

        var reader = new FileReader(); // new file reader instance
        reader.onload = function(e) {
            console.log(e);
            var result = JSON.stringify(e.target.result);
            var formatted = JSON.stringify(result, null, 2);
            const procElement = document.getElementById("proc");
            if (procElement) {
                procElement.value = formatted;
            }
        }

        reader.readAsText(fileUpload.item(0));
    };

    const save_function = () => {
        var textToSave = document.getElementById("proc").value; // Get text from textarea

        try{
            var data = []; // Initialize an array to hold data
            data.push(textToSave); // Add text to data array
            
            var data_string = JSON.stringify(data); // Convert data array to JSON string

            var file = new Blob([data_string], {type: 'text'}); // Create a Blob from the data
            
            var anchor = document.createElement("a"); // Create an anchor element

            anchor.href = URL.createObjectURL(file); // Set href to Blob URL

            anchor.download = "save.txt"; // Set the download attribute with a filename

            anchor.click(); // Programmatically click the anchor to trigger download
            
            // Clean up the URL object
            URL.revokeObjectURL(anchor.href);
        } catch (error) {
            console.error("Error saving file:", error);
        }
    };

    return (
        <div className="save-load-controls">
            <h4>📡 Save/Upload 🛰️</h4>
            <div className="save-load-buttons" style={{ display: 'flex', alignItems: 'center' }}>
                <input 
                    type="file" 
                    id="fileInput" 
                    accept=".json,.txt" 
                    onChange={handleFileChange}
                    className="file-input-custom"
                    title="Upload file"/>
                <button 
                    type="button" 
                    onClick={save_function} 
                    className="save-btn"
                    title="Save text to file"
                    style={{ marginLeft: '-80px' }}>
                    💾
                </button>
            </div>
        </div>
    );
}

export default SaveLoad;