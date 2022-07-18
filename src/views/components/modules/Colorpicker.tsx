import React, { useState, useEffect } from "react";

const Colorpicker = (props: any) => {
  const { setColort, color } = props;
  const colorPicker = (color: string) => {
    setColort(color);
    localStorage.setItem("pickColor", color);
  };

  return (
    <input
      value={color}
      type="color"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const colorValue: string = event.target.value;
        colorPicker(colorValue);
      }}
    />
  );
};

export default Colorpicker;
