import './ImageSlider.css';
import React, { useState, useEffect } from 'react';
import { TbCircleDotFilled } from "react-icons/tb";


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
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'd') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSliding]);

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
        {/* left arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)" d="M49.132 21.984L12.714 48.039a2.516 2.516 0 0 0-1.051 2.043v.006a2.52 2.52 0 0 0 1.059 2.048L49.14 78.023a2.513 2.513 0 0 0 2.612.183a2.508 2.508 0 0 0 1.361-2.236V63.787l32.709.001a2.514 2.514 0 0 0 2.515-2.516l-.001-22.541a2.515 2.515 0 0 0-2.516-2.516H53.114V24.029c0-.94-.53-1.803-1.367-2.237a2.51 2.51 0 0 0-2.615.192" />
        </svg>

      </button>
      <button
        onClick={handleNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        {/* right arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#082942', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#43C7B1', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)" d="M50.868 78.016l36.418-26.055a2.516 2.516 0 0 0 1.051-2.043v-.006a2.52 2.52 0 0 0-1.059-2.048L50.86 21.977a2.513 2.513 0 0 0-2.612-.183a2.509 2.509 0 0 0-1.361 2.236v12.183l-32.709-.001a2.514 2.514 0 0 0-2.515 2.516l.001 22.541a2.515 2.515 0 0 0 2.516 2.516h32.706v12.187c0 .94.53 1.803 1.366 2.237a2.512 2.512 0 0 0 2.616-.193" />
        </svg>

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
            <TbCircleDotFilled aria-hidden />

          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}

export default ImageSlider;
