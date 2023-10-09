import React from 'react';
import HorizontalParallax from '@/components/HorizontalParallax';

const Home: React.FC = () => {
  return (
    <div>
      <div style={{ height: '200vh' }}>
        {/* Content before the parallax section */}
      </div>
      <HorizontalParallax />
      <div style={{ height: '200vh' }}>
        {/* Content before the parallax section */}
      </div>
    </div>
  );
};

export default Home;
