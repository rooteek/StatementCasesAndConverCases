// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfomr from './components/TexForm';
import Alert from './components/Alert';

function App() {

 const[mode,setMode]= useState('light'); 
 const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white';
    console.log(mode)
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor='black'
    console.log(mode)

  }
 }

  return (
    <>
      <Navbar title="ReactProject" about="AboutSection" home="TextForm" Action="Number" mode={mode} toggleMode={toggleMode}/>
      <Alert/>
      <div className='container'>  

      <Textfomr heading="Enter Text" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
