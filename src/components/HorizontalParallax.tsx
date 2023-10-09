'use client';
import React, { useEffect, useRef } from 'react';
import './HorizontalParallax.css';

const HorizontalParallax: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPercentage = window.scrollY / window.innerHeight;
        sectionRef.current.style.transform = `translateX(${scrollPercentage * 100 * 0.5}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="horizontal-parallax-section" ref={sectionRef}>
      <div className="content">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula velit vitae quam ullamcorper, non
          ullamcorper ante tincidunt. Nulla facilisi. Cras vestibulum tortor a urna interdum, in pharetra justo
          volutpat. Fusce nec velit ac dui lacinia pellentesque.
        </p>
        <p className="text-xl mt-4">
          Integer nec odio eu ex lacinia vestibulum. Nam auctor odio id eleifend vehicula. Sed bibendum aliquam
          lacus, eu bibendum justo ullamcorper nec. Donec bibendum, purus id venenatis bibendum, justo sem sodales
          est, sit amet hendrerit quam lorem non dolor.
        </p>
        <p className="text-xl mt-4">
          Vivamus eu quam non urna feugiat vehicula ac id libero. Vivamus dapibus, urna eu ultricies facilisis, arcu
          ligula egestas ligula, non sollicitudin neque erat et ex.
        </p>
        <p className="text-xl mt-4">
          Sed interdum purus sit amet dolor pellentesque, eget consequat nunc tincidunt. Nullam viverra massa vel odio
          euismod, eget fermentum nisl ultrices. Proin non erat at velit semper egestas vel eu justo.
        </p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default HorizontalParallax;
