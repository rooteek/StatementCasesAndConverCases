// import { useState } from "react"
import React, { useState } from 'react'

export default function Textfomr(props) {

    const [text, setText] = useState("");
    function converUpCase() {
        // console.log(text)
        let textChnage = text.toUpperCase();
        setText(textChnage);
        props.showAlert("Converted to Upper Case","Success",);

    }
    const converLoCase = () => {
        // console.log(text)
        let textChnage = text.toLowerCase();
        setText(textChnage);
        props.showAlert("Converted to Lower Case","Success");

    }

    const clearText = () => {
        setText('')
    }
    const handlerOnChange = (event) => {
        console.log('event onchange')
        setText(event.target.value);
    }

    const copyOnClick = () => {
        // let text = document.getElementById('myBox');
        // text.select();
        //    navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        // document.execCommand("copy");
    }

    const speachBtn=()=>{
        let myBox = document.getElementById('myBox');
        let syth = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(`${myBox.value}`);
        syth.speak(voice);
    }
    // Speak button speak to write and write to speak, clear, download , statement, cout specific charector,
    return <>
        <div className='container' style={{color:props.mode==="light"?'black':'white'}}>
            <div className='d-flex justify-content-between align-items-end'>
                <h1>{props.heading}</h1>
                <button className='h-25 border-0 btn-light' title='clear' onClick={clearText} style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}>X</button>
            </div>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handlerOnChange} id="myBox" rows="3" required placeholder='Enter Text Here' style={{backgroundColor:props.mode === 'light' ? 'white' : 'black',color:props.mode==="light"?'black':'white'}}> </textarea>
            </div>
            <button className='btn btn-primary me-2' onClick={converUpCase}>UPPER CASE</button>
            <button className='btn btn-warning me-2' onClick={converLoCase}>lower case</button>
            <button className='btn btn-secondary me-2' onClick={speachBtn}> <i className="bi bi-megaphone"></i>Speech</button>
            <button className='btn btn-success me-2' onClick={copyOnClick}>Copy</button>
            <div className='container my-3'>
                <h1>You Text Summary</h1>
                {/* <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>

                <p>{text}</p>
            </div>
        </div>
    </>
}
