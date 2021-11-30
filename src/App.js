
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {


  const [mode, setMode] = useState('dark'); // Whether dark mode is enabledd or not
  const [alert, setAlert] = useState(null)
  const [bgColor, setbgColor] = useState('#13466e')




  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleModeLight = () => {
    if (mode !== 'light') {
      setMode('light')
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled', 'dark')
      // document.title = "TextUtils - Danger Mode";
      setbgColor('#f8f9fa');
    }
  }

  const toggleModeDark = () => {
    if (mode !== 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert('Dark mode has been enabled', 'light')
      // document.title = "TextUtils - Dark Mode";
      setbgColor('#13466e');
    }
  }

  const toggleModeDanger = () => {
    if (mode !== 'danger') {
      setMode('danger')
      document.body.style.backgroundColor = "rgb(248, 113, 113)";
      document.body.style.color = "white";
      showAlert('Danger mode has been enabled', 'danger')
      // document.title = "TextUtils - Danger Mode";
      setbgColor('red');
    }
    
  }

  const toggleModeSuccess = () => {
    if (mode !== 'success') {
      setMode('success')
      document.body.style.backgroundColor = "rgb(103, 233, 103)";
      document.body.style.color = "white";
      showAlert('Success mode has been enabled', 'success')
      // document.title = "TextUtils - Sucess Mode";
      setbgColor('green');

    }
  
  }

  const toggleModePrimary = () => {
    if (mode !== 'primary') {
      setMode('primary')
      document.body.style.backgroundColor = "rgb(99, 149, 241)";
      document.body.style.color = "white";
      showAlert('Primary mode has been enabled', 'primary')
      // document.title = "TextUtils - Danger Mode";
      setbgColor('blue');

    }
   
  }

  const toggleModeWarning = () => {
    if (mode !== 'warning') {
      setMode('warning')
      document.body.style.backgroundColor = "rgb(241, 197, 74)";
      document.body.style.color = "white";
      showAlert('Warning mode has been enabled', 'warning')
      // document.title = "TextUtils - Danger Mode";
      setbgColor('rgb(236, 177, 12)');

    }
   
  }

  const toggleModeInfo = () => {
    if (mode !== 'info') {
      setMode('info')
      document.body.style.backgroundColor = "lightskyblue";
      document.body.style.color = "white";
      showAlert('Info mode has been enabled', 'info')
      // document.title = "TextUtils - Danger Mode";
      setbgColor('lightblue');

    }
   
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode}  toggleModeLight={toggleModeLight} toggleModeDark={toggleModeDark} toggleModeDanger={toggleModeDanger} toggleModeSuccess={toggleModeSuccess} toggleModePrimary={toggleModePrimary}  toggleModeInfo = {toggleModeInfo} toggleModeWarning={toggleModeWarning}/> 
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} bgColor={bgColor} />
      </div>

      {/* <Router>
        <Navbar title="TextUtils" mode={mode}  toggleModeLight={toggleModeLight} toggleModeDark={toggleModeDark} toggleModeDanger={toggleModeDanger} toggleModeSuccess={toggleModeSuccess} toggleModePrimary={toggleModePrimary}  toggleModeInfo = {toggleModeInfo} toggleModeWarning={toggleModeWarning}/> 
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}  bgColor={bgColor}/>}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router> */}

    </>
  );
}

export default App;
