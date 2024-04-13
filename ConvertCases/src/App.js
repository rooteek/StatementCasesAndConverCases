// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfomr from './components/TexForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(massage,type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      console.log(mode);
      showAlert("Ligth Mord Enable","success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      console.log(mode)
      showAlert("Dark Mord Enable","success");

    }
  }


  return (
    <>
      <Navbar title="ReactProject" about="AboutSection" home="TextForm" Action="Number" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <Textfomr heading="Enter Text" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
