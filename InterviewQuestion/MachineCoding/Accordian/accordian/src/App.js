import './App.css';
import Accordian from './component/Accordian';

function App() {
  const accordionData = [
    { title: "Section 1", content: "This is the content of Section 1" },
    { title: "Section 2", content: "This is the content of Section 2" },
    { title: "Section 3", content: "This is the content of Section 3" },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Accordion</h1>
      <Accordian items={accordionData} />
    </div>
  );
}

export default App;
