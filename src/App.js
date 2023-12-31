import Navbar from './components/Navbar';
import './App.css'
import React, { useState } from 'react'
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App () {
  const [mode, setMode] = useState('light');
  const [btnText, setbtnText] = useState('Enable Dark Mode');
  const [progress, setProgress] = useState(0);

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode('dark');
      setbtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      setbtnText('Enable Dark Mode');
      document.body.style.backgroundColor = '#ffffff';
    }
  }

  const pageSize = 15
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <>
      <BrowserRouter>
      <Navbar title="NewsNest" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <LoadingBar
        height={3} 
        color='#f11946'
        progress={progress}
      />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" mode={mode} pageSize={pageSize} countryName="in" category="general"/>}></Route>
          <Route path="/business" element={ <News setProgress={setProgress} apiKey={apiKey} key="business" mode={mode} pageSize={pageSize} countryName="in" category="business"/>}></Route>
          <Route path="/entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="entertainment" mode={mode} pageSize={pageSize} countryName="in" category="entertainment"/>}></Route>
          <Route path="/health" element={ <News setProgress={setProgress} apiKey={apiKey} key="health" mode={mode} pageSize={pageSize} countryName="in" category="health"/>}></Route>
          <Route path="/science" element={ <News setProgress={setProgress} apiKey={apiKey} key="science" mode={mode} pageSize={pageSize} countryName="in" category="science"/>}></Route>
          <Route path="/sports" element={ <News setProgress={setProgress} apiKey={apiKey} key="sports" mode={mode} pageSize={pageSize} countryName="in" category="sports"/>}></Route>
          <Route path="/technology" element={ <News setProgress={setProgress} apiKey={apiKey} key="technology" mode={mode} pageSize={pageSize} countryName="in" category="technology"/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
      </>
    )
}

export default App;
