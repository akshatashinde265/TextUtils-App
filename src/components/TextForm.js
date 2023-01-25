import React, { useState }  from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convertet to Uppercase", "success");
   
  }
  const handleLoClick = ()=>{
    //console.log(Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Convertet to Lowercase", "success")
  }
  const handleClearClick = ()=>{
    //console.log("Clear Text");
    let newText = '';
    setText(newText)
    props.showAlert("Cleared Text", "success")
   
  }
  
  const handleOnChange = (event)=>{
    //console.log("On change");
    setText(event.target.value)
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")
  }

  const [text, setText] = useState('')
  
  
 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control "  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2e2e2e':'white',
     color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert into Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={ handleExtraSpaces}>Remove Extra Space</button>
   
    
   </div>
   <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
    <h1 >Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </>
  )
}
