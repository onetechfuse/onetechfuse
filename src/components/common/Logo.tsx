import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Logo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      {/* Main Circle - representing fusion */}
      <circle
        cx="256"
        cy="256"
        r="230"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeDasharray="30 15"
      />
      
      {/* Inner connecting circles - representing tech connectivity */}
      <g transform="rotate(45 256 256)">
        <circle
          cx="256"
          cy="256"
          r="160"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray="15 10"
        />
        <circle
          cx="256"
          cy="256"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />
      </g>

      {/* Central hexagon - representing tech core */}
      <path
        fill="currentColor"
        d="M256 150
           L346 200
           L346 300
           L256 350
           L166 300
           L166 200
           Z"
      />

      {/* Circuit lines */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        d="M256 150 L256 100
           M346 200 L396 200
           M346 300 L396 300
           M256 350 L256 400
           M166 300 L116 300
           M166 200 L116 200"
      />

      {/* Connection dots */}
      <circle cx="256" cy="100" r="8" fill="currentColor" />
      <circle cx="396" cy="200" r="8" fill="currentColor" />
      <circle cx="396" cy="300" r="8" fill="currentColor" />
      <circle cx="256" cy="400" r="8" fill="currentColor" />
      <circle cx="116" cy="300" r="8" fill="currentColor" />
      <circle cx="116" cy="200" r="8" fill="currentColor" />

      {/* Central pulse effect */}
      <circle
        cx="256"
        cy="256"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        opacity="0.6"
      >
        <animate
          attributeName="r"
          values="40;60;40"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6;0.2;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </SvgIcon>
  );
};

export default Logo; 