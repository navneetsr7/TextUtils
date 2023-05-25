import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Here");

  const handleUpClick = () => {
    // console.log("Upper case was clicked" + text);
    // const newText = text.toUpperCase();
    setText(text.toUpperCase());
  }
  const handleLowClick = () => {
    console.log(text);
    // const newText = text.toLowerCase();
    setText(text.toLowerCase());
  }
  const handleInput = (e) => {
    console.log("On change")
    setText(e.target.value);
  }
  const handleClear = () => {
    setText('');
  }
  const handleCopy = ()=>{
   var textArea = document.getElementById("myBox");
   textArea.select(text);
    console.log(text);
    navigator.clipboard.writeText(text);
  }
  
  return (
    <>
      <div className='container mt-3 mb-3'>
        <h2>Enter Here Your Text :</h2>
        <div className="mb-3"style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
          <h2>{props.heading}</h2>
          <textarea className="form-control" id="myBox"  onChange={handleInput} value={text} rows="5"></textarea>
        </div>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
          <button className="btn btn-danger my-2 mx-2" onClick={handleClear}>Clear</button>
          <button className="btn btn-warning my-2 mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split('').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
