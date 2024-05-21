import { useEffect, useRef } from 'react';
import image15 from '../src/assets/image 15.svg';
import image16 from '../src/assets/image 16.svg';
import image17 from '../src/assets/image 17.svg';
import image18 from '../src/assets/image 18.svg';
import image25 from '../src/assets/image 25.svg';
import image26 from '../src/assets/image 26.svg';
import '../src/ScrollableSection.css';

const images = [image15, image16, image17, image18, image25, image26];

const ScrollableSection = () => {
  const containerRef = useRef(null);
  const totalImages = images.length;

  useEffect(() => {
    const container = containerRef.current;
    let currentIndex = 0;
    const imageWidth = 260; // 200px (image width) + 10px (margin-right)
    
    const scrollImages = () => {
      currentIndex += 1;
      container.style.transition = 'transform 1s linear';
      container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      
      if (currentIndex >= totalImages) {
        setTimeout(() => {
          container.style.transition = 'none';
          container.style.transform = 'translateX(0)';
          currentIndex = 0;
        }, 1000); // Match the duration of the transition
      }
    };

    const interval = setInterval(scrollImages, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="scrollable-section">
      <div className="scrollable-container" ref={containerRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
        {images.map((image, index) => (
          <img key={totalImages + index} src={image} alt={`Image ${totalImages + index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollableSection;
