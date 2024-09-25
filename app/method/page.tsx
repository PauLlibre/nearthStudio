"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/images/nearth_logo.jpg';

export default function Method() {
    const [hoveredArea, setHoveredArea] = useState<keyof typeof circleInfo | null>(null);

    const circleInfo = {
        main: "Main circle information",
        bottom: "Bottom circle information",
        left: "Left circle information",
        right: "Right circle information",
        bottomLeft: "Bottom-Left intersection information",
        bottomRight: "Bottom-Right intersection information",
        topCenter: "Top-Center intersection information"
    };

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-[60vmin] h-[60vmin]">
                <div 
                    className="absolute inset-0 rounded-full border-4 border-black cursor-pointer"
                    onMouseEnter={() => setHoveredArea('main')}
                    onMouseLeave={() => setHoveredArea(null)}
                >
                    <Image 
                        src={logo} 
                        alt="Method" 
                        className="w-1/2 h-auto object-contain absolute top-4 left-1/2 transform -translate-x-1/2 mt-10" 
                        width={500}
                        height={500}
                    />
                </div>
                <div 
                    className="absolute bottom-[12%] left-1/2 transform -translate-x-1/2 w-[40%] h-[40%] border-4 border-black rounded-full cursor-pointer"
                    onMouseEnter={() => setHoveredArea('bottom')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                <div 
                    className="absolute top-[22%] right-[44%] w-[40%] h-[40%] border-4 border-black rounded-full cursor-pointer"
                    onMouseEnter={() => setHoveredArea('left')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                <div 
                    className="absolute top-[22%] left-[44%] w-[40%] h-[40%] border-4 border-black rounded-full cursor-pointer"
                    onMouseEnter={() => setHoveredArea('right')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                <div 
                    className="absolute bottom-[35%] left-[30%] w-[10%] h-[10%] cursor-pointer"
                    onMouseEnter={() => setHoveredArea('bottomLeft')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                <div 
                    className="absolute bottom-[35%] right-[30%] w-[10%] h-[10%] cursor-pointer"
                    onMouseEnter={() => setHoveredArea('bottomRight')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                <div 
                    className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[10%] h-[10%] cursor-pointer"
                    onMouseEnter={() => setHoveredArea('topCenter')}
                    onMouseLeave={() => setHoveredArea(null)}
                ></div>
                {hoveredArea && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-2 bg-white border border-black rounded shadow-lg">
                        {circleInfo[hoveredArea]}
                    </div>
                )}
            </div>
        </div>
    )
}