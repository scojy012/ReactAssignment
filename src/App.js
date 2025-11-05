import './App.css';
import { useEffect, useRef, useState } from "react";
import { StrudelMirror, theme } from '@strudel/codemirror';
import { evalScope } from '@strudel/core';
import { drawPianoroll } from '@strudel/draw';
import { initAudioOnFirstClick } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import { getAudioContext, webaudioOutput, registerSynthSounds } from '@strudel/webaudio';
import { registerSoundfonts } from '@strudel/soundfonts';
import { stranger_tune } from './tunes';
import console_monkey_patch, { getD3Data } from './console-monkey-patch';
import PlayButtons from './components/PlayButtons'; // Import PlayButtons component
import logo from './logo.svg'; // Import logo image
import PreProcessText from './components/PreProcessText'; // Import PreProcessText component
import Editor from './components/Editor'; // Import Editor component
import InstrumentButtons from './components/InstrumentButtons'; // Import InstrumentButtons component
import CanvasRoll from './components/CanvasRoll'; // Import CanvasRoll component
import SaveLoad from './components/SaveLoad'; // Import SaveLoad component
import { Preprocess } from './components/PreprocessLogic'; // Import Preprocess function

let globalEditor = null;
let globalVolume = 1;

const handleD3Data = (event) => {
    console.log(event.detail);
};

// Process and Play function for 
export function ProcAndPlay() {
    if (globalEditor) {
        Proc();
        globalEditor.evaluate();
    } 
}

// Preprocess function to set code in processor
export function Proc() {    
    const procElement = document.getElementById('proc');
    if (!procElement) {
        return;
    }
    
    let proc_text = procElement.value;
    
    // Apply volume preprocessing
    let processedText = Preprocess(proc_text, globalVolume);
    
    if (globalEditor) {
        globalEditor.setCode(processedText);
    } 
}


export default function StrudelDemo() {

    const hasRun = useRef(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Track theme state
    const [volume, setVolume] = useState(1); // Track volume state

    const handlePlay = () => {
        globalEditor.evaluate();
    }
    const handleStop = () => {
        globalEditor.stop();
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('light-theme');
        } else {
            document.documentElement.classList.remove('light-theme');
        }
    }

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        globalVolume = newVolume; // Update global volume
        // Reprocess the text with new volume
        ProcAndPlay();
    }

    const [songText, setSongText] = useState(stranger_tune);

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        globalVolume = volume; // Initialize global volume
        hasRun.current = true;
        
        // Initialize theme - default to dark mode
        if (isDarkMode) {
            document.documentElement.classList.remove('light-theme');
        } else {
            document.documentElement.classList.add('light-theme');
        }
        //Code copied from example: https://codeberg.org/uzu/strudel/src/branch/main/examples/codemirror-repl
            //init canvas
            const canvas = document.getElementById('roll');
            canvas.width = canvas.width * 2;
            canvas.height = canvas.height * 2;
            const drawContext = canvas.getContext('2d');
            const drawTime = [-2, 2]; // time window of drawn haps
            globalEditor = new StrudelMirror({
                defaultOutput: webaudioOutput,
                getTime: () => getAudioContext().currentTime,
                transpiler,
                root: document.getElementById('editor'),
                drawTime,
                onDraw: (haps, time) => drawPianoroll({ haps, time, ctx: drawContext, drawTime, fold: 0 }),
                prebake: async () => {
                    initAudioOnFirstClick(); // needed to make the browser happy (don't await this here..)
                    const loadModules = evalScope(
                        import('@strudel/core'),
                        import('@strudel/draw'),
                        import('@strudel/mini'),
                        import('@strudel/tonal'),
                        import('@strudel/webaudio'),
                    );
                    await Promise.all([loadModules, registerSynthSounds(), registerSoundfonts()]);
                },
            });
            
        document.getElementById('proc').value = stranger_tune
        
    }

            globalEditor.setCode(songText);
}, [songText]);


// Main return for the App component containing components and layout (PlayButtons, InstrumentButtons, SaveLoad, PreProcessText, Editor, CanvasRoll)
return (
    <div className="app-container p-3 mb-2"> 
        <div className="app-header-section">
            <button id="theme-switch" onClick={toggleTheme}>
                🌓
            </button>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="app-title">Strudel</h2>
        </div>
        <main>
            <div className="container text-center">
                <div className="row">
                    <div className="col-4">
                        <PlayButtons onPlay={handlePlay} onStop={handleStop} onProcessPlay={ProcAndPlay} onProcess={Proc}/>
                    </div>
                    <div className="col-4">
                        <InstrumentButtons volume={volume} onVolumeChange={handleVolumeChange}/>
                    </div>
                    <div className="col-4">
                        <SaveLoad/>
                    </div>
                </div>
                <div className = "row">
                    <div>
                        <PreProcessText defaultValue={songText} onChange={(e) => setSongText(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <Editor/>
                    </div>
                </div>
            </div>
            <div>
                <CanvasRoll/>
            </div>
        </main>
    </div>
);


}