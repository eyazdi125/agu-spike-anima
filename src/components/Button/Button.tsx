/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Icon32 } from "../../icons/Icon32";

interface Props {
  size: "large" | "medium" | "small";
  style: "stroke" | "contained";
  shape: "rounded" | "rectangle";
  icon: "none" | "right" | "left";
  text: "hide" | "show";
  border: boolean;
  className: any;
  text1: string;
}

export const Button = ({ size, style, shape, icon, text, border, className, text1 = "Button" }: Props): JSX.Element => {
  return (
    <button
      className={`inline-flex items-center overflow-hidden justify-center relative all-[unset] box-border ${
        style === "stroke" && border ? "border border-solid" : ""
      } ${style === "stroke" && border ? "border-[color:var(--colors-accent)]" : ""} ${
        shape === "rectangle" && ["left", "right"].includes(icon) ? "gap-[6px]" : "gap-[8px]"
      } ${
        size === "medium" && text === "show"
          ? "px-[20px] py-[8px]"
          : text === "show" && size === "large"
          ? "px-[28px] py-[14px]"
          : size === "small" && text === "hide"
          ? "p-[8px]"
          : size === "medium" && text === "hide"
          ? "p-[12px]"
          : text === "hide" && size === "large"
          ? "p-[16px]"
          : "px-[16px] py-[6px]"
      } ${
        shape === "rounded" && size === "large"
          ? "rounded-[26px]"
          : shape === "rectangle"
          ? "rounded-[6px]"
          : "rounded-[20px]"
      } ${style === "contained" ? "bg-[color:var(--colors-accent)]" : ""} ${className}`}
    >
      {["none", "right"].includes(icon) && (
        <div
          className={`w-fit mt-[-1.00px] text-center whitespace-nowrap relative ${
            size === "medium"
              ? "[font-family:var(--text-medium-font-family)]"
              : size === "large"
              ? "[font-family:var(--text-large-font-family)]"
              : "[font-family:var(--text-small-font-family)]"
          } ${
            size === "medium"
              ? "tracking-[var(--text-medium-letter-spacing)]"
              : size === "large"
              ? "tracking-[var(--text-large-letter-spacing)]"
              : "tracking-[var(--text-small-letter-spacing)]"
          } ${
            size === "medium"
              ? "text-[length:var(--text-medium-font-size)]"
              : size === "large"
              ? "text-[length:var(--text-large-font-size)]"
              : "text-[length:var(--text-small-font-size)]"
          } ${size === "medium" ? "" : size === "large" ? "" : ""} ${
            style === "stroke" ? "text-[color:var(--colors-accent)]" : "text-[color:var(--colors-dominant)]"
          } ${
            size === "medium"
              ? "font-[number:var(--text-medium-font-weight)]"
              : size === "large"
              ? "font-[number:var(--text-large-font-weight)]"
              : "font-[number:var(--text-small-font-weight)]"
          } ${
            size === "medium"
              ? "leading-[var(--text-medium-line-height)]"
              : size === "large"
              ? "leading-[var(--text-large-line-height)]"
              : "leading-[var(--text-small-line-height)]"
          }`}
        >
          {text1}
        </div>
      )}

      {["left", "right"].includes(icon) && (
        <Icon32
          className={
            text === "show" && size === "large"
              ? "!relative !w-[18px] !h-[18px]"
              : text === "hide" && size === "large"
              ? "!relative !w-[20px] !h-[20px]"
              : "!relative !w-[16px] !h-[16px]"
          }
          color={style === "stroke" ? "#457EFF" : "white"}
        />
      )}

      {icon === "left" && text === "show" && (
        <div
          className={`w-fit mt-[-1.00px] relative text-center whitespace-nowrap ${
            size === "medium"
              ? "[font-family:var(--text-medium-font-family)]"
              : size === "large"
              ? "[font-family:var(--text-large-font-family)]"
              : "[font-family:var(--text-small-font-family)]"
          } ${
            size === "medium"
              ? "tracking-[var(--text-medium-letter-spacing)]"
              : size === "large"
              ? "tracking-[var(--text-large-letter-spacing)]"
              : "tracking-[var(--text-small-letter-spacing)]"
          } ${
            size === "medium"
              ? "text-[length:var(--text-medium-font-size)]"
              : size === "large"
              ? "text-[length:var(--text-large-font-size)]"
              : "text-[length:var(--text-small-font-size)]"
          } ${size === "medium" ? "" : size === "large" ? "" : ""} ${
            style === "stroke" ? "text-[color:var(--colors-accent)]" : "text-[color:var(--colors-dominant)]"
          } ${
            size === "medium"
              ? "font-[number:var(--text-medium-font-weight)]"
              : size === "large"
              ? "font-[number:var(--text-large-font-weight)]"
              : "font-[number:var(--text-small-font-weight)]"
          } ${
            size === "medium"
              ? "leading-[var(--text-medium-line-height)]"
              : size === "large"
              ? "leading-[var(--text-large-line-height)]"
              : "leading-[var(--text-small-line-height)]"
          }`}
        >
          {text1}
        </div>
      )}
    </button>
  );
};
