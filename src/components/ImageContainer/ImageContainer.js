import { React, useState, useEffect } from 'react';
import './ImageContainer.css';

const ImageContainer = ({ images }) => {
   console.log(images)
  const [largeImage, setLargeImage] = useState(images[0]);
  const [RightLargeImage, setRightLargeImage] = useState(images[4]);
  console.log(largeImage)

  const [smallImages, setSmallImages] = useState(images.slice(1, 4));
  const [RightsmallImages, setRightsmallImages] = useState(images.slice(5));
 
  useEffect(() => {
    setLargeImage(images[0]);
    setRightLargeImage(images[4]);
    setSmallImages(images.slice(1, 4));
    setRightsmallImages(images.slice(5));
  }, [images]);

  const handleClickLeftImage = (clickedImage, index) => {
    const newSmallImages = [...smallImages];
    newSmallImages[index] = largeImage;
    setSmallImages(newSmallImages);
    setLargeImage(clickedImage);
  };

  const handleClickRightImage = (clickedImage, index) => {
    const newSmallImages = [...RightsmallImages];
    newSmallImages[index] = RightLargeImage;
    setRightsmallImages(newSmallImages);
    setRightLargeImage(clickedImage);
  };

  return (
      <div className="images-container">
      
        <div className="image-section">
          <div className="large-image">
            <img src={largeImage} alt="Large" />
          </div>
          <div className="small-images">
            {smallImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Small ${index + 1}`}
                onClick={() => handleClickLeftImage(src, index)}
              />
            ))}
          </div>
          <div className='star_container'>
            <div className='dash dash-top'>------</div>
            <div className="transform-icon">
              <img src='https://rideshinemobiledetailing.com/wp-content/uploads/2022/10/star-icon.png' alt="star"/>
            </div>
            <div className='dash dash-bottom'>--------<span className='arrow'>></span></div>
          </div>
        </div>

        <div className="image-section-right">
          <div className="large-image">
            <img src={RightLargeImage} alt="Large" />
          </div>
          <div className="small-images-right">
            {RightsmallImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Small ${index + 1}`}
                className={`small-image-${index + 1}`}
                onClick={() => handleClickRightImage(src, index)}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default ImageContainer;
