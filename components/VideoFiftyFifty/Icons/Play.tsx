import React from 'react';

interface IPlayIconProps {
  height: number;
  width: number;
}

const PlayIcon: React.FC<IPlayIconProps> = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 30 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.81176 2.87051C3.01184 2.39648 2 2.97304 2 3.90286V31.6909C2 32.6207 3.01184 33.1973 3.81176 32.7232L27.2579 18.8292C28.0422 18.3644 28.0422 17.2293 27.2579 16.7645L3.81176 2.87051Z"
      fill="black"
      stroke="#111111"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlayIcon;
