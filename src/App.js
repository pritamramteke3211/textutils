
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {


  const [mode, setMode] = useState('light'); // Whether dark mode is enabledd or not
  const [alert, setAlert] = useState(null)
  const [bgColor, setbgColor] = useState('white')



  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode !== 'dark') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert('Dark mode has been enabled', 'light')
      document.title = "TextUtils - Dark Mode";
      setbgColor('grey');
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled', 'dark')
      document.title = "TextUtils - Light Mode"
      setbgColor('white');
    }
  }

  const toggleModeRed = () => {
    if (mode !== 'danger') {
      setMode('danger')
      document.body.style.backgroundColor = "rgb(248, 113, 113)";
      document.body.style.color = "white";
      showAlert('Danger mode has been enabled', 'danger')
      document.title = "TextUtils - Danger Mode";
      setbgColor('red');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled', 'dark')
      document.title = "TextUtils - Light Mode"
      setbgColor('white');
    }
  }

  const toggleModeGreen = () => {
    if (mode !== 'success') {
      setMode('success')
      document.body.style.backgroundColor = "rgb(103, 233, 103)";
      document.body.style.color = "white";
      showAlert('Success mode has been enabled', 'success')
      document.title = "TextUtils - Sucess Mode";
      setbgColor('green');

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled', 'dark')
      document.title = "TextUtils - Light Mode"
      setbgColor('white');

    }
  }

  const toggleModeBlue = () => {
    if (mode !== 'primary' ) {
      setMode('primary')
      document.body.style.backgroundColor = "rgb(99, 149, 241)";
      document.body.style.color = "white";
      showAlert('Primary mode has been enabled', 'primary')
      document.title = "TextUtils - Danger Mode";
      setbgColor('blue');

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('Light mode has been enabled', 'dark')
      document.title = "TextUtils - Light Mode";
      setbgColor('white');

    }
  }





  return (
    <>

      {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
      {/* <Navbar /> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} toggleModeBlue={toggleModeBlue} />
      <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}  bgColor={bgColor}/>}>
            </Route>
          </Routes>
        </div>
      </Router>






    </>
  );
}

export default App;
