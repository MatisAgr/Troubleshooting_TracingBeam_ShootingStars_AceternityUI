import React from 'react';

import { ShootingStars } from './shooting-stars';
import { StarsBackground } from './stars-background';

interface SpaceLayoutProps {
  children: React.ReactNode;
  showStars?: boolean;
  className?: string;
}

export default function SpaceLayout({
  children,
  showStars = true,
  className = "",
}: SpaceLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#020c1d] text-white overflow-hidden relative ${className}`}>

      {showStars && (
        <>
          {/* ShootingStars */}
          <ShootingStars
            minSpeed={10}
            maxSpeed={30}
            minDelay={1200}
            maxDelay={4200}
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            starWidth={100}
            starHeight={100}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          />
        </>
      )}
      
      {/* StarsBackground */}
      <StarsBackground
        starDensity={0.00015}
        allStarsTwinkle={true}
        twinkleProbability={0.7}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}