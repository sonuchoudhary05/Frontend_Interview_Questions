import { useState, useEffect } from 'react';
import './App.css';
import Caraousal from './components/Caraousal';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (imgLimit) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);
  return (
    <div className="caraousal-container">
      <p>Caraousal App</p>
      <Caraousal
      images = {images}
      isLoading = {loading}
      imageLimit = {3}
      imagePerSlide = {2}
       />
    </div>
  );
}

export default App;
