import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const Logo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      {/* Stylized modern logo for OneTechFuse */}
      
      {/* Background shape */}
      <path
        d="M150 156 
           A100 100 0 0 0 150 356
           L362 356
           Q402 356 402 316
           L402 196
           Q402 156 362 156
           Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="round"
      />
      
      {/* Horizontal line connecting elements */}
      <line
        x1="150"
        y1="256"
        x2="350"
        y2="256"
        stroke="currentColor"
        strokeWidth="12"
      />
      
      {/* Dot accent for "One" */}
      <circle cx="150" cy="256" r="24" fill="currentColor" />
      
      {/* Tech accent dot */}
      <circle cx="262" cy="256" r="12" fill="currentColor" />
      
      {/* Fuse accent lightning symbol */}
      <path
        d="M370 226
           L350 256
           L370 286"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default Logo; 