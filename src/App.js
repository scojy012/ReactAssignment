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
import SaveTxt from './components/SaveTxt'; // Import SaveTxt component
import Upload from './components/Upload'; // Import Upload component
import CanvasRoll from './components/CanvasRoll';

let globalEditor = null;

const handleD3Data = (event) => {
    console.log(event.detail);
};

/*export function SetupButtons() {

    document.getElementById('play').addEventListener('click', () => globalEditor.evaluate());
    document.getElementById('stop').addEventListener('click', () => globalEditor.stop());
    document.getElementById('process').addEventListener('click', () => {
        Proc()
    }
    )
    document.getElementById('process_play').addEventListener('click', () => {
        if (globalEditor != null) {
            Proc()
            globalEditor.evaluate()
        }
    }
    )
}
*/

export function ProcAndPlay() {
    if (globalEditor != null && globalEditor.repl.state.started === true) {
        console.log(globalEditor)
        Proc()
        globalEditor.evaluate();
    }
}
export function Proc() {

    let proc_text = document.getElementById('proc').value
    let proc_text_replaced = proc_text.replaceAll('<p1_Radio>', ProcessText);
    ProcessText(proc_text);
    globalEditor.setCode(proc_text_replaced)
}
export function ProcessText(match, ...args) {

    let replace = ""
    if (document.getElementById('flexRadioDefault2').checked) {
        replace = "_"
    }

    return replace
}


export default function StrudelDemo() {

    const hasRun = useRef(false);

    const handlePlay = () => {
        globalEditor.evaluate();
    }
    const handleStop = () => {
        globalEditor.stop();
    }

    const [songText, setSongText] = useState(stranger_tune);

useEffect(() => {

    if (!hasRun.current) {
        document.addEventListener("d3Data", handleD3Data);
        console_monkey_patch();
        hasRun.current = true;
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
        //SetupButtons()
        //Proc()
    }


    const volumeSlider = document.getElementById('myRange');
        if(volumeSlider){
        volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        if (globalEditor && globalEditor.volumeSlider)
            globalEditor.volumeSlidersetVolume(volume);
    });
}

            globalEditor.setCode(songText);
}, [songText]);

return (
    <div className="app-container p-3 mb-2"> 
        <div className="app-header-section">
            <button id="theme-switch">
                🌓
            </button>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="app-title">Strudel</h2>
        </div>
        <main>
            <div className="container text-center">
                <div className= "row">
                       <div className="col-6">
                            <PlayButtons onPlay = {handlePlay} onStop={handleStop}/>
                        </div>
                    <div className="col">
                        <InstrumentButtons/>
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
            <canvas id="roll"></canvas>
             <div className="row">
                    <div>
                        <SaveTxt/>
                    </div>
                    <div>
                        <Upload/>
                    </div>
            </div>
        </main>
    </div>
);


}