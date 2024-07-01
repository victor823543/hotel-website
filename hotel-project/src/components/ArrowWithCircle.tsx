import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  x: number;
  y: number;
}

const ArrowWithCircle: React.FC<ArrowProps> = ({ direction, x, y }) => {
  // Determine the rotation angle based on the direction prop
  const rotation = direction === 'right' ? 0 : 180;

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        left: `${x}px`,
        top: `${y}px`,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        pointerEvents: 'none', // Prevent blocking interactions
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" />
      <path d="M30 50 L70 50 M55 40 L70 50 L55 60" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );
};

export default ArrowWithCircle;
