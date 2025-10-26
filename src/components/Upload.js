import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

// upload file function with file reader
function Upload(){
    
    const title = document.getElementById("load")
    if (title = document.getElementById("load").files[0] == null) {
        alert('No file selected. Please choose a file to upload.');
        return;
    }


    var file = document.getElementById("load").files[0]?.innerText; // we are only choosing one file [0]

    var reader = new FileReader(); // new file reader instance

    reader.onloadend = function(){ // when file reading is finished
        try {
            var load = JSON.parse(reader.result); // parse the JSON string so it becomes normal text
            alert(load);
            document.getElementById("proc").value = load; // set the text area value to the loaded text
        } catch (error) {
            alert('Error parsing JSON file: ' + error.message);
        }
    }
    reader.readAsText(file); // read the file as text
    <>
    // input element for loading file
    return (
        <input type="file" id="load" name="load" onChange={Upload} />

    );

    </>

}
export default Upload;