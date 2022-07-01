import React from 'react';
import { useState } from 'react';

export default function (props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked",  + text);
    let newText = text.toUpperCase()
    setText(newText);
  }

  const handleLowClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleExtraSpaceClick = () => {
    console.log("Extra Space was clicked" + text);
    let newText = text.trim();
    setText(newText);
  }

  const handleRemoveClick = () => {
    console.log("Remove was clicked");
    let newText = text.remove();
    setText(newText);
  }

  const handleOnChange = (e) => {
    console.log("On Change was clicked");
    setText(e.target.value);
  }

    const [text,setText] = useState("");

  return (
    <>
    <div className="conatiner d-flex">
        <div className="container my-3 md-1">
        <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        <button type="button" onClick={handleUpClick} className="btn btn-success my-3">Convert To Upper Case</button>
        <button type="button" onClick={handleLowClick} className="btn btn-success my-3 mx-3">Convert To Lower Case</button>
        <button type="button" onClick={handleExtraSpaceClick} className="btn btn-success my-3 mx-3">Remove Extra Spaces</button>
        {/* <button type="button" onClick={handleCopyClick} className="btn btn-success my-3 mx-3" id='mycopy'>Copy Text</button> */}
        <button type="button" onClick={handleRemoveClick} className="btn btn-success my-3 mx-3">Clear Text</button>
        </div>
        </div>
        <div className="container my-3 md-1">
        <div className="mb-3">
          <h2>Your Text Summary</h2>
          <p> <b>Words - </b>{text.split(" ").length}</p>
          <p> <b>Characters - </b> {text.length}</p>
          <p> <b>Minutes Read - </b> {0.008 * text.split(" ").length} </p>
        </div>

        <div className="mb-3">
          <h2>Preview</h2>
          <p> <b>{text}</b></p>
        </div>
        </div>
      </div>
    </>

  )
}
