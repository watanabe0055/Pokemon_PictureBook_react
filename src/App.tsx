import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { PokemonAllFeatch } from "./views/components/modules/PokemonAllFeatch";
import { PokemonDateFetch } from "./views/components/modules/PokemonDateFetch";

const Contents = styled.div`
  height: 100%;
  background-color: #7c83fd;
  padding: 20px;
`;
//resset css
const GlobalStyle = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

function App() {
  //todo 最新は898まで存在しているが、データが出揃っていない
  const maxNumber = 809;
  const pokemonAll = PokemonDateFetch();
  return (
    <>
      <Contents>
        <PokemonDateFetch />
        <div>
          {Array(810)
            .fill("test", 1)
            .map((val, i) => {
              return <PokemonAllFeatch key={i} id={i} />;
            })}
        </div>
      </Contents>
    </>
  );
}

export default App;
