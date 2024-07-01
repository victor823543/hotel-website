import React from 'react';

interface DecorationLineProps {
    width: number;
    color: string;
    variant: number;
    height?: number;
    translateY?: number;
}

const DecorationLine: React.FC<DecorationLineProps> = ({width, color, variant, height=800, translateY=0}) => {

  // Define the path data for a curly line spanning the entire width
  const pathData = `
    M 0 ${height }
    C ${width / 8} ${height / 1.5}, ${width / 4} ${height}, ${width / 2} ${height / 2}
    S ${width * 3 / 4} ${height / 3}, ${width} ${height / 3}
  `;

  const pathData1 = `
    M 0 ${height / 2}
    C ${width / 6} ${height / 3}, ${width / 3} ${height / 1.2}, ${width / 2} ${height / 1.5}
    S ${width * 2 / 3} ${height / 2}, ${width} ${height / 1.8}
  `;

  const pathData2 = `
    M 0 ${height}
    C ${width / 8} ${height / 1.6}, ${width / 4} ${height * 0.8}, ${width / 2} ${height / 2.5}
    S ${width * 3 / 4} ${height / 2.8}, ${width} ${height / 4}
  `;

  const pathData3 = `
    M 0 ${height / 1.5}
    C ${width / 4} ${height / 2}, ${width / 2} ${height / 1.8}, ${width * 3 / 4} ${height / 1.2}
    S ${width} ${height / 1.4}, ${width} ${height / 3}
  `;
  const pathData4 = `
    M 0 ${height / 1.2}
    C ${width / 5} ${height / 1.5}, ${width / 2.5} ${height / 1.8}, ${width / 2} ${height / 1.3}
    S ${width * 4 / 5} ${height / 1.6}, ${width} ${height / 2}
  `;

  const pathData5 = `
  M ${width} ${height}
  C ${width - width / 8} ${height / 1.5}, ${width - width / 4} ${height}, ${width / 2} ${height / 2}
  S ${width / 4} ${height / 3}, 0 ${height / 3}
  `
  const variations = [pathData, pathData1, pathData2, pathData3, pathData4, pathData5]

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{position: 'absolute', left: '0', top: '10px', opacity: '.3', pointerEvents: 'none', transform: `translateY(${translateY}px)`}}>
      <path
        d={variations[variant]}
        fill="transparent"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};

export default DecorationLine;
