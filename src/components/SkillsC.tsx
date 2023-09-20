'use client';
import data from '@/assets/data';
import React, { useState, useEffect } from 'react';

const SkillsC: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center h-screen">
            {data.skills.map((skill, index) => {
                const zoom = 1 + scrollY * 0.005;
                const moveDistance = index % 2 === 0 ? scrollY * 0.5 : scrollY * -0.5;
                return (
                    <div
                        key={skill.id}
                        style={{ transform: `translateX(${moveDistance}px) scale(${zoom})` }}
                        className="m-4 p-2 flex items-center justify-center rounded shadow-md text-lg transform transition-transform duration-300"
                    >
                        {skill.name}
                    </div>
                );
            })}
        </div>
    );
}

export default SkillsC;
