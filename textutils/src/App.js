import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Alert from './components/Alert';
import Calculator from './components/Calculator';


function App() {
  const [mode,setMode] = useState('light')// Wheater Dark mode enable or not
  const [alert, setAlert] = useState("Light Mode has been Enabled");

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      typ:type 
    })
  }
   
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      setAlert('Dark Mode has been Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      setAlert('Light Mode has been Enabled','success')

    }
  }

  return (  
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
      <Routes>
        <Route path="/" mode={mode} element={<TextForm/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </Router>
  );
}

export default App;
