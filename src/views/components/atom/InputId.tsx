import React from "react";

import { PokemonDateFetch } from "../modules/PokemonDateFetch";

export const InputId = () => {
  return (
    <>
      <div className="App">
        <input
          placeholder="0"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value: number = Number(event.target.value);
            PokemonDateFetch(value);
          }}
        />
      </div>
    </>
  );
};
