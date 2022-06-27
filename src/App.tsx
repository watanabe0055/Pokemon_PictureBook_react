import React, { useEffect, useState } from "react";
import styled from "styled-components";
import reset from "styled-reset";

import { PokemonDateFetch } from "./views/components/modules/PokemonDateFetch";

const Contents = styled.div`
  height: 100%;
  background-color: #7c83fd;
  padding: 20px;
`;
const GlobalStyle = styled.div`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle>
        <Contents>
          <PokemonDateFetch />
        </Contents>
      </GlobalStyle>
    </>
  );
}

export default App;
