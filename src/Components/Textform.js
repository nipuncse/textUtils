import React,{useState} from 'react';

function Textform(props) {
	
	const[text,setText]= useState('')


    const handleUpClick = ()=>{
		console.log('Clicked on Up button')
		// let text2 = text.toUpperCase();
		setText(text.toUpperCase())
	}

	const handleOnChange =(event)=>{
		console.log("Enter handle on change");
		setText(event.target.value)
		// setText(event.target.value.trim())
	}

	const handleClearClick=()=>{
		setText('')
	}

  return (
      <>
	  <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
	  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Example textarea</label>
  <textarea className="form-control" value  = {text} placeholder="Enter the text" onChange ={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-success mx-2" onClick = {handleClearClick}>Clear Text</button>

<div className="summary">
	<p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0 ? text.trim().length:0} characters <br></br> {text.length>0?text.trim().split(" ").length:0} words <br/>Average word length : {text.length>0?((text.length>0 ? text.replace(/\s+/g, ' ').trim().split(" ").length:0)/(text.length>0?text.trim().split(" ").length:0)):0}</p>
</div>

	  </>
	)
}

export default Textform
