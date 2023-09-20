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

    const textColors = [
        'text-red-500', 'text-yellow-500', 'text-green-500', 'text-grey-500',
        'text-indigo-500', 'text-purple-500', 'text-pink-500'
    ];

    const randomTextColor = () => {
        const randomIndex = Math.floor(Math.random() * textColors.length);
        return textColors[randomIndex];
    };

    return (
        <div className="flex flex-wrap justify-center items-center h-screen">
            {data.skills.map((skill, index) => {
                const baseSize = 0.5; // 0.5rem
                const zoom = 1 + scrollY * 0.005;
                const moveDistance = index % 2 === 0 ? scrollY * 0.5 : scrollY * -0.5;
                const fontSize = `${baseSize + index * 0.25}rem`;
                const gridColumn = 1 + (index % 4);
                const gridRow = 1 + Math.floor(Math.random() * 4);
                const textColor = randomTextColor();
                return (
                    <div
                        key={skill.id}
                        style={{
                            transform: `translateX(${moveDistance}px) scale(${zoom})`,
                            fontSize: fontSize,
                            gridColumn: gridColumn,
                            gridRow: gridRow
                        }}
                        className={`m-4 transform transition-transform duration-300 ${textColor}`}
                    >
                        {skill.name}
                    </div>
                );
            })}
        </div>
    );
}

export default SkillsC;
