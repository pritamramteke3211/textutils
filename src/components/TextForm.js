import React, { useState } from 'react'


export default function TextForm(props) {



    const handleUpClick = () => {
        // console.log("Uppercase was click" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Connverted to uppercase','success')
    }

    const handleLwClick = () => {
        // console.log("Lowercase was click" + text);
        let lwText = text.toLowerCase();
        setText(lwText)
        props.showAlert('Connverted to lowercase','success')

    }


    const handleCTClick = () => {
        // console.log("On change");
        let clText = '';
        setText(clText);
        props.showAlert('All text cleared','success')
    }



    // Copy to Clipboard
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!','success')
    }

    // Remove Extra Space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces removed','success')
    }




    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new Test0"; // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state

    console.log(text !==" " ?text.split(): null)

    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>

                <div className="mb-3">

                    <textarea className={`form-control `} value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.bgColor, color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className={`btn btn-${props.mode} border-${props.mode === "light"?'dark':"light"} me-2`} onClick={handleUpClick}>Convert to Uppercase</button>

                <button className={`btn btn-${props.mode} border-${props.mode === "light"?'dark':"light"} me-2`} onClick={handleLwClick}>Convert to Lowercase</button>

                <button className={`btn btn-${props.mode} border-${props.mode === "light"?'dark':"light"} me-2`} onClick={handleCTClick}>Clear Text</button>
                <button className={`btn btn-${props.mode} border-${props.mode === "light"?'dark':"light"} me-2`} onClick={handleCopy} >Copy</button>
                <button className={`btn btn-${props.mode} border-${props.mode === "light"?'dark':"light"} me-2`} onClick={handleExtraSpaces}>Remove ExtraSpaces</button>


            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                {/* <p>{text !== " "?text.split(/[ ]+/).length -1: 0} words and {text.length} characters</p> */}
                <p>{text !== ''?text.split(/[ ]+/).length -1: 0} words and {text.length} characters</p>
                {/* <p>{text.split(/[ ]+/).length !==0?text.split(" ").length: 0} words and {text.length} characters</p> */}
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text !== " "  ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
