/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/no-unknown-property */
import React from 'react';

type ILogoProps = {
  size?: string;
};

const Logo: React.FC<ILogoProps> = ({ size }) => (
  <svg width={size} height={size} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="f" x1="42.691" x2="65.487" y1="128.56" y2="129.88" gradientTransform="translate(-29.482 114.9)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a1a1a1" offset="0" />
        <stop stopColor="#ededed" offset="1" />
      </linearGradient>
      <linearGradient id="e" x1="122.79" x2="106.69" y1="132.54" y2="133.26" gradientTransform="translate(-29.482 114.9)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#beb9b9" offset="0" />
        <stop stopColor="#fff" stopOpacity=".053292" offset="1" />
      </linearGradient>
      <radialGradient id="a" cx="86.107" cy="146.11" r="10.484" gradientTransform="matrix(2.6698 .030921 -.027202 2.3488 -169.29 -87.674)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#575757" offset="0" />
        <stop stopColor="#535353" stopOpacity="0" offset="1" />
      </radialGradient>
      <linearGradient id="d" x1="84.693" x2="119.99" y1="106.91" y2="104.37" gradientTransform="translate(-29.482 114.9)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f4f4f4" offset="0" />
        <stop stopColor="#969696" offset="1" />
      </linearGradient>
      <linearGradient id="c" x1="95.39" x2="99.702" y1="146.52" y2="143.09" gradientTransform="translate(-29.482 114.9)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#808080" offset="0" />
        <stop stopColor="#fff" offset="1" />
      </linearGradient>
      <linearGradient id="b" x1="44.994" x2="38.158" y1="128.25" y2="127.7" gradientTransform="translate(-29.482 114.9)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b3b3b3" offset="0" />
        <stop stopColor="#575757" offset="1" />
      </linearGradient>
    </defs>
    <g transform="translate(0,-197)">
      <g transform="translate(0 4.1577)" stroke="#949494" strokeWidth=".26458px">
        <path d="m89.186 194.35-45.554 37.067 14.284 19.862z" fill="url(#d)" />
        <path d="m46.491 235.49c5.6934-1.7262 14.806-2.2709 20.558-0.26055l-9.1339 16.045z" fill="url(#a)" />
        <path d="m54.305 255.73 34.88-61.385 4.2711 84.493c-0.4136 1.5831-1.5686 3.0342-3.0691 4.2862" fill="url(#c)" />
        <path d="m15.647 195.03-7.7088 86.933c0.48278 1.6418 1.9734 3.6992 3.8955 5.1054" fill="url(#b)" />
        <path d="m54.305 255.73 34.88-61.385 4.2711 84.493c-0.41361 1.5831-1.5686 3.0342-3.0691 4.2862" fill="url(#e)" />
        <path d="m11.833 287.06c17.309 6.9439 65.433 6.6297 78.554-3.9387-6.5846-3.7267-23.197-20.65-32.779-34.223l-41.962-53.877z" fill="url(#f)" />
      </g>
    </g>
  </svg>
);

Logo.defaultProps = {
  size: '40px',
};

export default Logo;
