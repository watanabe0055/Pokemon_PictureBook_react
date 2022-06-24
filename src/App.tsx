import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PokemonDateFetch } from "./views/components/modules/PokemonDateFetch";

const Contents = styled.div`
  height: 100%;
  background-color: #7c83fd;
  padding: 20px;
`;

function App() {
  return (
    <>
      <Contents>
        <PokemonDateFetch />
      </Contents>
    </>
  );
}

export default App;
