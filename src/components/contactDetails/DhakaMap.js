"use client"
import React, { useEffect, useState } from 'react';

const DhakaMap = () => {
  const [area, setArea] = useState(0);

  useEffect(() => {
    // Path data from the SVG
    const pathData = "M200,150 L250,180 L300,160 L350,200 L380,250 L360,300 L320,340 L280,350 L250,310 L220,270 L190,240 Z";

    // Function to parse path data and calculate area using Shoelace theorem
    const calculateArea = (pathData) => {
      // Extract coordinates
      const coordinates = pathData.match(/-?[\d.]+/g).map(Number);
      const points = [];
      for (let i = 0; i < coordinates.length; i += 2) {
        points.push([coordinates[i], coordinates[i + 1]]);
      }

      // Shoelace formula to calculate the area
      let area = 0;
      for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[(i + 1) % points.length];
        area += x1 * y2 - y1 * x2;
      }
      area = Math.abs(area) / 2;
      return area;
    };

    // Calculate the area
    const calculatedArea = calculateArea(pathData);
    setArea(calculatedArea);
  }, []);

  return (
    <div>
      <svg width="1000" height="800" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <title>Dhaka Division Map</title>
        <defs>
          {/* Define gradient */}
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="30%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "green", stopOpacity: 1 }} />
            <stop offset="80%" style={{ stopColor: "red", stopOpacity: 1 }} />
            <stop offset="90%" style={{ stopColor: "blue", stopOpacity: 1 }} />
             
          </linearGradient>
        </defs>
        
        {/* Background */}
        <rect width="100%" height="100%" fill="white" />
        
        {/* Dhaka Division Boundary with gradient color */}
        <path d="M200,150 L250,180 L300,160 L350,200 L380,250 L360,300 L320,340 L280,350 L250,310 L220,270 L190,240 Z" fill="url(#colorGradient)" stroke="none" strokeWidth="0" />
        
        {/* Rivers (simplified) */}
        {/* <path d="M210,155 Q230,170 250,160 Q270,150 290,170" fill="none" stroke="blue" strokeWidth="2" />
        <path d="M330,190 Q350,210 370,230 Q380,260 360,270" fill="none" stroke="blue" strokeWidth="2" /> */}
        
        {/* Labels */}
        <text x="220" y="220" fontFamily="Arial" fontSize="20" fill="black">Dhaka</text>
        <text x="340" y="220" fontFamily="Arial" fontSize="20" fill="black">Narayanganj</text>
        <text x="300" y="300" fontFamily="Arial" fontSize="20" fill="black">Narsingdi</text>
        
        {/* Legend */}
        <rect x="600" y="50" width="150" height="100" fill="white" stroke="black" />
        <text x="610" y="70" fontFamily="Arial" fontSize="16" fill="black">Legend:</text>
        <rect x="610" y="80" width="15" height="15" fill="lightblue" stroke="black" />
        <text x="630" y="93" fontFamily="Arial" fontSize="14" fill="black">Dhaka Division</text>
        <path d="M610,110 L625,110" fill="none" stroke="blue" strokeWidth="2" />
        <text x="630" y="113" fontFamily="Arial" fontSize="14" fill="black">Rivers</text>
      </svg>
      <div>Area: {area} square units</div>
    </div>
  );
};

export default DhakaMap;
