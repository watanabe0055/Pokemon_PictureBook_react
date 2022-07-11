import React, { useState } from "react";

const Colorpicker = (props: any) => {
  const colorPicker = (color: string) => {
    props.setColort(color);
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
