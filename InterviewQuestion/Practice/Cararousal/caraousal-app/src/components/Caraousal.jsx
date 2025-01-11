import React, { useRef , useState} from 'react'

const Caraousal = ({images,isLoding,imageLimit,imagePerSlide}) => {
    const imageRef = useRef(null);
    const [imgWidth, setImgWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
       setCurrentIndex(currentIndex < imageLimit-1 ? currentIndex + 1 : 0);
    };
    const handleBack = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex-1 : imageLimit-1);
    }
    console.log("Images : ",images)
  return (
    <div>
      {isLoding ? (
        <p>Image Loding...</p>
      ):(
        <div className="carousel" style={{width: imagePerSlide * imgWidth}}>
      <div
        className="image-container"
        style={{transform: `translateX(-${currentIndex * imgWidth}px)`}}
      >
        {images
          .slice(0, imageLimit > images.length ? images.length : imageLimit)
          .map((image, index) => {
            return (
              <img
                onLoad={() => setImgWidth(imageRef?.current?.offsetWidth)}
                ref={imageRef}
                key={image.id}
                src={image.url}
                alt={image.title}
                className="image"
              />
            );
          })}
      </div> <button className="btn prev" onClick={handleBack}>
          ⏮️⏮️
        </button>
        <button className="btn next" onClick={handleNext}>
         ⏭️⏭️
        </button>
    </div>
      )}
    </div>
  )
}

export default Caraousal
