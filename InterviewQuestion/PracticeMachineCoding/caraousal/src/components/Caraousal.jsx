import React, {useRef, useEffect} from "react";

const Caraousal = ({
  images,
  loding,
  imageLimit = 4,
  imagePerSlide,
  prev,
  next,
}) => {
  const imageWidthRef = useRef(null);
  const [imageWidth, setImageWidth] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  console.log("Images Width :", imageWidthRef?.current?.offsetWidth);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  }
  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  console.log("Current Index is :", currentIndex)
  return (
    <div className="carousel-container" style={{width: imageWidth*imagePerSlide}}>
      {loding && "Loading..."}
     <div className="image-container" style={{transform: `translateX(-${currentIndex * imageWidth}px)`}}>
     {images.length > 0 &&
        images.slice(0, imageLimit).map((image) => (
            <img src={image.thumbnail} alt={image.title}
            ref = {imageWidthRef}
            onLoad={ () => {
              setImageWidth(imageWidthRef?.current?.offsetWidth);
            }}
           />
          )
        )}
     </div>
         <button className="btn prev" onClick={handlePrev}> Prev</button>
         <button className="btn next" onClick={handleNext}> next</button>
    </div>
  );
};

export default Caraousal;
