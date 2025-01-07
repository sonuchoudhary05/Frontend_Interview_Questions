import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import useCustomEffect from './hooks/useCustomEffect';

function App() {
  const [value, set, remove] = useLocalStorage("username", "sonu choudhary");
  useCustomEffect(() => {
    console.log("Value changed", value);
  },[value]);

  const clearStorage = () => {
    remove();
    set("");
  } 
  return (
    <div >
      <input type="text" placeholder="Enter the text" value = {value} onChange = {(e) => set(e.target.value)} />
      <button onClick = {clearStorage}>Reset</button>
    </div>
  );
}

export default App;
