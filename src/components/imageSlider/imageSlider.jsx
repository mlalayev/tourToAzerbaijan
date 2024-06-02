import React, { useState, useEffect } from 'react';
import { GrUserManager } from 'react-icons/gr';
import './imageSlider.css';

function ImageSlider({ slides }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleNextImage = () => {
    if (!isSliding) {
      setIsSliding(true);
      setImageIndex(index => (index === slides.length - 1 ? 0 : index + 1));
    }
  };

  const handlePrevImage = () => {
    if (!isSliding) {
      setIsSliding(true);
      setImageIndex(index => (index === 0 ? slides.length - 1 : index - 1));
    }
  };

  useEffect(() => {
    if (isSliding) {
      const timer = setTimeout(() => {
        setIsSliding(false);
      }, 500); // match the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [isSliding]);

  return (
    <section
      aria-label="Image Slider"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {slides.map(({ image, title, caption }, index) => (
          <div
            key={image}
            className="slide"
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          >
            <img
              src={image}
              alt={title}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
            />
            <div className="slide-caption">
              <h3>{title}</h3>
              <p>{caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <GrUserManager aria-hidden />
      </button>
      <button
        onClick={handleNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <GrUserManager aria-hidden />
      </button>
      <div
        style={{
          position: 'absolute',
          bottom: '.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '.25rem',
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            <GrUserManager aria-hidden />
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}

export default ImageSlider;