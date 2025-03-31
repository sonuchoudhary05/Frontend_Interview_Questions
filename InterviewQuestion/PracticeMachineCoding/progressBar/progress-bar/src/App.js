import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './Component/ProgressBar';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 100);
    return () => clearInterval(interval);
  }
  , []);
  return (
    <div className="App">
     <ProgressBar
     progress = {progress}
      />
    </div>
  );
}

export default App;
