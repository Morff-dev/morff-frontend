import * as React from 'react';

function SvgEdit(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M31.1,10.2c1.2-1.2,1.2-2.9,0-4.1l0,0l-5.2-5.2c-1.2-1.2-2.9-1.2-4.1,0l0,0L0,22.7V32h9.3L31.1,10.2z M23.9,2.9l5.2,5.2 l-4.4,4.4l-5.2-5.2L23.9,2.9z M2.9,29.1v-5.2L17.5,9.3l5.2,5.2L8.1,29.1H2.9z" />
    </svg>
  );
}

export default SvgEdit;
