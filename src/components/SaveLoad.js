// import the modules 
import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

function SaveLoad() {
    // function to handle file upload and read its content
    const handleFileChange = (event) => {
        var fileUpload = event.target.files;
        console.log(fileUpload);
        // if no file selected than return a message
        if(fileUpload.length <= 0){
            alert('no file selected');
            return;
        }

        var reader = new FileReader(); // new file reader instance
        reader.onload = function(e) {
            console.log(e);
            var result = e.target.result;  // Just use the raw file content
            const procElement = document.getElementById("proc");
            if (procElement) {
                procElement.value = result;  // Set raw content directly
            }
        }

        reader.readAsText(fileUpload.item(0));
    };


// function to save the content of the textarea with id="proc" to a textfile
    const save_function = () => {
        var textToSave = document.getElementById("proc").value; // Get text from textarea

        try{
            var file = new Blob([textToSave], {type: 'text'}); // Create Blob directly from text
            
            var save = document.createElement("a"); // Create save

            save.href = URL.createObjectURL(file); // Set href to Blob URL

            save.download = "saveMusic.txt"; // Set the filename for the user to save and change

            save.click(); // confirm click to download
            
            // Clean up the URL object and not keep the reference anymore
            URL.revokeObjectURL(save.href);
        } catch (error) { // catch error if any file save fails
            console.error("Error saving file:", error);
        }
    };


    // return the save/load for the textarea with id="proc"
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