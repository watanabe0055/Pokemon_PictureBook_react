import React, { useState, useEffect } from "react";

const Colorpicker = (props: any) => {
  const colorPicker = (color: string) => {
    props.setColort(color);
    localStorage.setItem("pickColor", color);
  };

  return (
    <input
      type="color"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        colorPicker(value);
      }}
    />
  );
};

export default Colorpicker;
