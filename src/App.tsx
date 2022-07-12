import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colorpicker from "./views/components/modules/Colorpicker";

import { PokemonAllFeatch } from "./views/components/modules/PokemonAllFeatch";
import { PokemonDateFetch } from "./views/components/modules/PokemonDateFetch";

const Contents = styled.div`
  height: 100%;
  padding: 20px;
  background-color: ${(color) => color.theme.color};
`;

function App() {
  //todo 最新は898まで存在しているが、データが出揃っていない
  // const maxNumber = 809;
  const token = localStorage.getItem("pickColor");
  const [color, setColort] = useState(token);

  return (
    <>
      <Contents theme={{ color: color }}>
        <Colorpicker setColort={setColort} />
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
