import {React, useState} from 'react'

import Modal from '../Modal/Modal';
import './ImageContainer.css';

const ImageContainer = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const largeImage= images[0]
    const RightLargeImage = images[4]
    
  const smallImages=images.slice(1,4);
  const RightsmallImages=images.slice(5);

  const handleClickImage = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="images-container">

        <div className="image-section">
        <div className="large-image">
          <img src={largeImage} alt="Large" onClick={() => handleClickImage(largeImage)} />
        </div>
        <div className="small-images">
          {smallImages.map((src, index) => (
            <img key={index} src={src} alt={`Small ${index + 1}`} onClick={() => handleClickImage(src)} />
          ))}
        </div>
        <div className='star_container'>
        <div className='dash'>----</div>
        <div className="transform-icon">
            <img src='https://rideshinemobiledetailing.com/wp-content/uploads/2022/10/star-icon.png' alt="star"/>
        </div>
        <div className='dash'>--------<span className='arrow'>></span></div>
        </div>
      </div>
            
        <div className="image-section">
        <div className="large-image">
          <img src={RightLargeImage} alt="Large" onClick={() => handleClickImage(RightLargeImage)} />
        </div>
        <div className="small-images-right">
          {RightsmallImages.map((src, index) => (
            <img key={index} src={src} alt={`Small ${index + 1}`} className={`small-image-${index + 1}`} onClick={() => handleClickImage(src)} />
          ))}
        </div>
      </div>
      </div>

      {selectedImage && <Modal src={selectedImage} closeModal={closeModal} />}
    </div>
  )
}

export default ImageContainer
