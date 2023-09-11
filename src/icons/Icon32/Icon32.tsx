/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon32 = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.16156 10H17.2314" stroke={color} strokeLinecap="round" strokeWidth="1.2" />
      <path d="M11.1533 3.31488L17.8384 10L11.1533 16.6851" stroke={color} strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
};
