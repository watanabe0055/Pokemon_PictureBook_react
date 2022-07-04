import React, { useState, useEffect } from "react";

export const PokemonAllFeatch: any = ({ id }: any) => {
  const [number, setNumber] = useState("");
  useEffect(() => {
    setNumber(id);
  }, []);
  console.log(number);
  return (
    <>
      <p>{number}</p>
    </>
  );
  return <div>PokemonAllFeatch</div>;
};
