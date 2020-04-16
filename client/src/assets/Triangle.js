import React from 'react';

const SVG = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    viewBox = "0 0 1280.000000 1066.000000"
  }) => (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g transform="translate(0.000000,1066.000000) scale(0.100000,-0.100000)"
fill={fill} stroke="none">
      <path
        d="M6240 10651 c-135 -26 -258 -90 -361 -190 -65 -63 -115 -144 -952
-1551 -486 -817 -1786 -3002 -2890 -4857 -1887 -3170 -2008 -3376 -2022 -3443
-27 -129 -11 -279 40 -381 38 -75 126 -163 198 -199 l60 -30 6016 0 c5980 0
6016 0 6086 20 114 32 187 74 249 140 127 138 170 338 102 484 -13 28 -461
776 -996 1661 -1621 2683 -2239 3706 -3590 5945 -1417 2347 -1334 2219 -1487
2309 -134 80 -318 117 -453 92z"
      />
      </g>
    </svg>
  );
  
  export default SVG;
  