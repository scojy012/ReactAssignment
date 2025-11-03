
import React from 'react';

function SaveTxt() {
    
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
        <div>
            <button 
                type="button" 
                onClick={save_function} 
                className="btn btn-secondary btn-lg"
                title="Save text to file">
                <h2>💾</h2>
            </button>
        </div>
    );
}

export default SaveTxt;