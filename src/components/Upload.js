import React, { useState, useEffect } from 'react';
import '../App.css';
import PreProcessText from './PreProcessText';

// upload file function with file reader
function Upload(){
    


    document.getElementById("load").onclick = function() {
        var fileUpload = document.getElementById("proc").files;
        console.log(fileUpload);
        if(fileUpload.length <= 0){
            return('No file selected. Please choose a file to upload.');
        }

        var reader = new FileReader(); // new file reader instance
        reader.onload = function(e) {
            console.log(e);
            var result = JSON.stringify(e.target.result);
            var formatted = JSON.stringify(result, null, 2);
            document.getElementById("proc").value = formatted;
        }

        reader.readAsText(fileUpload.item(0));
            

    };

    /*
    const title = document.getElementById("proc")


    var file = document.getElementById("proc").files[0]?.innerText; // we are only choosing one file [0]

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


    */
    <>
    // input element for loading file
    return (
        <input type="file" id="proc" value="Import" onChange={Upload} /><br/>
        <button id="import">Load File</button>

    );

    </>

}
export default Upload;