import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Form";
import { useState } from 'react';
// import Axios from './components/Axios'
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';


function App() {
  const [mode, setMode]=useState('light');
  // dark
  const[alert, setAlert]=useState(null)
  const[btntext, setBtntext]=useState('Enable Dark Mode')

// red
const[rmode, setRmode]=useState('light')
const[rtext, setRtext]=useState('Enable Red Mode')

// green
const[gmode, setGmode]=useState('light')
const[gtext, setGtext]=useState('Enable Green Mode')

  const showAlert=(message, type)=>{
   setAlert({msg: message,type: type})
   setTimeout(()=>{
    setAlert(null)
   },1000)
  }
// Handle  Dark Switch
  const handleDarkM=()=>{
    // coloradder();
    removeBody();
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#120c0c"
      showAlert('Dark Mode has been Enabled','success');
      setBtntext('Enable Light Mode')
      
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert('Light Mode has been Enabled', 'success');
      setBtntext('Enable Dark Mode')
    }
  }

// handle Red switch
    const handleRedM=()=>{
      // coloradder();
      removeBody();
      if(rmode==='light'){
        setRmode('red')
        document.body.style.backgroundColor="red"
        showAlert('Red Mode has been Enabled', 'success');
      setRtext('Enable Light Mode')

      }else{
      setRmode('light')
      document.body.style.backgroundColor="white"
      showAlert('Light Mode has been Enabled', 'success');
      setRtext('Enable Red Mode')
    }
  }

// handle green button
    const handleGreenM=()=>{
      // coloradder();
      removeBody();
      if(gmode==='light'){
        setGmode('green')
        document.body.style.backgroundColor="green"
        showAlert('Green Mode has been Enabled', 'success');
      setGtext('Enable Light Mode')

      }else{
        setGmode('light')
        document.body.style.backgroundColor="white"
        showAlert('Light Mode has been Enabled', 'success');
        setGtext('Enable Green Mode')

      }
}
// const[mystyle, setMystyle]=useState(null)
// const coloradder=()=>{
//   if( document.body.style.backgroundColor="green" ){
//     setMystyle('white')
//   }else if(document.body.style.backgroundColor="red" ){
//     setMystyle('white')
//   }else if(document.body.style.backgroundColor="dark"){
//     setMystyle('white')
//   }else if(document.body.style.backgroundColor='light'){
//     setMystyle('black')
//   }else if(document.body.style.backgroundColor='white'){
//     setMystyle('black')
//   }else{
//     setMystyle('black')
//   }
// }

const removeBody=()=>{
  document.body.classList.remove('red');
  document.body.classList.remove('dark');
  document.body.classList.remove('green');
}
  return (
    <>
    {/* <Router> */}
   <Navbar title="Sign up" about="ABOUT US" home="HOME" mode={mode} darkmode={handleDarkM} Btext={btntext} gmode={handleGreenM} rmode={handleRedM} Rtext={rtext} Gtext={gtext}/>
   <Alert alert={alert}/>
   <div className='container'>
    {/* <Routes> */}
     <Form showAlert={showAlert}heading="Enter the text to analyze below :" mode={mode} gmode={handleGreenM} rmode={handleRedM} />
       {/* <Axios/> */}
        {/* <Route exact path='/about' element={<About />}/> */}
    {/* </Routes> */}
    </div>
   {/* </Router> */}
    </>
  );
}

export default App;
