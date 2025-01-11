import { useState,useEffect } from 'react';
import './App.css';
import ProgressBar from './component/progressBar';

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
      setInterval(() => {
          setValue((val) => val + 1);
      },100)
  },[])
  return (
    <div className="app">
      <span>Porgress Bar</span>
      <ProgressBar value={value}
      onComplete = {() => {setSuccess(true)}}
       />
        {success && <span>Task Completed</span>}
    </div>
  );
}

export default App;
