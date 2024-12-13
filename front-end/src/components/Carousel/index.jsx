import React, { useState, useCallback } from 'react'
import './carousel.scss'
import rightArrow from '../../assets/chevron_carousel_right.png'
import leftArrow from '../../assets/chevron_carousel_left.png'

function Carousel({ imagesDiap = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesDiap.length - 1 : prevIndex - 1,
    )
  }, [imagesDiap])

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesDiap.length - 1 ? 0 : prevIndex + 1,
    )
  }, [imagesDiap])

  if (!imagesDiap.length) {
    return <div>No pictures available</div>
  }

  return (
    <div className="carrousel">
      {imagesDiap.length > 1 && (
        <button
          className="carrousel__button carrousel__button--left"
          onClick={prevPhoto}
        >
          <img src={leftArrow} alt="flèche précédente" />
        </button>
      )}
      <div className="carrousel__images">
        {imagesDiap.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Img ${index + 1}`}
            className={`carrousel__image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      {imagesDiap.length > 1 && (
        <div className="carrousel__numslide">{`${currentIndex + 1}/${imagesDiap.length}`}</div>
      )}
      {imagesDiap.length > 1 && (
        <button
          className="carrousel__button carrousel__button--right"
          onClick={nextPhoto}
        >
          <img src={rightArrow} alt="flèche suivante" />
        </button>
      )}
    </div>
  )
}

export default Carousel
