import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

// upload file function with file reader
function Upload(){
    
    const handleFileChange = (event) => {
        var fileUpload = event.target.files;
        console.log(fileUpload);
        // if no file selected than return a message
        if(fileUpload.length <= 0){
            alert('No file selected. Please choose a file to upload.');
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

    return (
        <>
        <div>
            <input type="file" id="fileInput" accept=".json,.txt" onChange={handleFileChange} />
        </div>
        </>
    );

}
export default Upload;