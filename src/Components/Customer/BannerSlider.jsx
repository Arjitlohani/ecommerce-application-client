// components/BannerSlider.jsx
import  { useState, useEffect } from 'react';

const banners = [
  { id: 1, image: 'https://via.placeholder.com/1500x400?text=Banner+1' },
  { id: 2, image: 'https://via.placeholder.com/1500x400?text=Banner+2' },
  { id: 3, image: 'https://via.placeholder.com/1500x400?text=Banner+3' },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  };

  const goToNext = () => {
    setCurrent((current + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-64">
      {banners.map((banner, index) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={`Banner ${banner.id}`}
          className={`absolute w-full h-64 object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {/* Left and Right Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default BannerSlider;
