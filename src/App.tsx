import React, { useEffect, useState } from "react";

import { PokemonDateFetch } from "./views/components/modules/PokemonDateFetch";

function App() {
  return (
    <>
      <div className="App">
        {/* <input
          placeholder="0"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value: number = Number(event.target.value);
            PokemonDateFetch(value);
          }}
        /> */}
      </div>
      <PokemonDateFetch></PokemonDateFetch>
    </>
  );
}

export default App;
