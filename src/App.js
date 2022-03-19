// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
	BrowserRouter,
	Route,
	Routes,
	Link
  } from "react-router-dom";

function App() {
	const [mode,setMode] = useState('light');
	const[alert,setAlert] = useState(null)
	const showAlert = (message,type)=>{
		setAlert({
			msg:message,
			typ:type
		})
		setTimeout(() => {
			setAlert(null)
		}, 1500);
	}
    const toggleMode = ()=>{
		if(mode==='light')
		{setMode('dark')
	     document.body.style.backgroundColor='black';
		showAlert("Dark Mode has been enabled","success")
		setInterval(() => {
			document.title="USE React"
		}, 2000);

		setInterval(() => {
			document.title="React Dark Mode"
		}, 1500);

		
	    }

		else
		{setMode('light')
	     document.body.style.backgroundColor='white';
		 showAlert("Light Mode has been enabled","success")
		 setInterval(() => {
			 document.title="USE React"
		 }, 2000);

		 setInterval(() => {
			document.title="React Light Mode"
		}, 1500);
		 
		}

	}
  return (
    <>
	
	{/* <div className="container">
	<Textform mode={mode} heading="Enter text below"/>
	<About/> */}
	
	 <BrowserRouter>
	 
	 <Navbar mode={mode} toggleMode={toggleMode} title="TextLy" />
	 <Alert mode={mode} alert={alert}/>
	 <div className="container">

           <Routes>
				 <Route path="about" element={<About />}/>
				 <Route path="/" element={<Textform showAlert={showAlert} heading="Enter text to Analyze below" mode={mode} /> }/> 
          </Routes> 
		  </div>
	</BrowserRouter>
	
	{/* </div> */}
	
	</>
  )
}


export default App;
