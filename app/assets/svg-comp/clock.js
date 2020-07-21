import * as React from 'react';

function SvgClock(props) {
  return (
    <svg viewBox="0 0 25 25" {...props}>
      <path
        d="M30.193,11.966a12.5,12.5,0,1,0,12.5,12.5A12.517,12.517,0,0,0,30.193,11.966Zm0,2.174A10.326,10.326,0,1,1,19.867,24.466,10.31,10.31,0,0,1,30.193,14.14Zm-.119,3.244a1.126,1.126,0,0,0-.968,1.1v5.978a1.13,1.13,0,0,0,1.087,1.087h4.891a1.087,1.087,0,1,0,0-2.174h-3.8V18.488A1.134,1.134,0,0,0,30.074,17.384Z"
        transform="translate(-17.693 -11.966)"
      />
    </svg>
  );
}

export default SvgClock;