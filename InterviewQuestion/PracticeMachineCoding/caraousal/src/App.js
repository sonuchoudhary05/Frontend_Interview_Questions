import { useState ,useEffect} from 'react';
import './App.css';
import Caraousal from './components/Caraousal';

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] =  useState([]);

  const fetchImages = async(imgLimit) => {
    try{
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${imgLimit}`);
      const data = await response.json();
      setImages(data.products);
      setLoading(false);
    }
    catch(error){
      console.log("Geetting an error , while fetching the images")
    }
  }

  useEffect(() => {
    fetchImages(8);
  },[])
  return (
    <div className="App">
     <Caraousal
     images = {images}
     loding = {loading}
     imageLimit = {images.length}
     imagePerSlide = {2}
     prev = {() => {}}
     next = {() => {}}
      />
    </div>
  );
}

export default App;
