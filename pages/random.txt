import { useState, useEffect } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('https://www.thaiflames.app/backend/wp-json/data/v1/profiles/');
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  useEffect(() => {
    function shuffleImages() {
    //   setImages(prevImages => prevImages.sort(() => Math.random() - 0.5));
      setImages(prevImages => prevImages.sort(() => Math.random()));
    }


    const intervalId = setInterval(shuffleImages);
    // const intervalId = setInterval(shuffleImages, 1000 * 60 * 60);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.title} />
      ))}
    </div>
  );
}
