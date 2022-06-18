import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

import PokemonDateFetch from "./views/components/modules/PokemonDateFetch";

function App() {
  //console.log(PokemonDateFetch(1));
  return (
    <div className="App">
      <input
        placeholder="0"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value: number = Number(event.target.value);
          PokemonDateFetch(value);
        }}
      />
    </div>
  );
}

export default App;
