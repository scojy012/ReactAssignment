import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

// upload file function with file reader
function uploadFile(){
    
    var file = document.getElementById("load").files[0]; // we are only choosing one file [0]

    var reader = new FileReader(); // new file reader instance

    reader.onloadend = function(){ // when file reading is finished

        var load = JSON.parse(reader.result); // parse the JSON string so it becomes normal text
        alert(load);
        document.getElementById("proc").value = load; // set the text area value to the loaded text
    }
    reader.readAsText(file); // read the file as text

    // input element for loading file
    return (
        <input type="file" id="load" name="load" onChange={uploadFile} />

    );

}
export default uploadFile;