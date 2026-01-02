import React from "react";

type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> & {
  defaultValue?: number | number[];
};

export function Slider({ defaultValue = 0, className = "", ...rest }: SliderProps) {
  const value = Array.isArray(defaultValue) ? defaultValue[0] : defaultValue;
  return <input type="range" defaultValue={value} className={className} {...rest} />;
}

export default Slider;
