import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Pokemonjson from "../../date/pokedex.json";
import { Card } from "../atom/Card";

const GridCard = styled.div`
  display: inline-block;
`;

export const PokemonAllFeatch: any = ({ id }: any) => {
  const [pid, setPid] = useState();
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbaseAtt, setPbaseAtt] = useState("");
  const [pbaseDef, setPbaseDef] = useState("");
  const [pbaseSp_att, setPbaseSp_att] = useState("");
  const [pbaseSp_def, setPbaseSp_def] = useState("");
  const [pbaseSpeed, setPbaseSpeed] = useState("");
  const [pImage, setPimage] = useState("");

  const pokemonDate = (num: number = 1) => {
    //画像取得
    const imageNum: string = String(num);
    let getImage: string = "001";
    if (num < 10) {
      getImage = `00${imageNum}`;
    } else if (num >= 10 && num <= 99) {
      getImage = `0${imageNum}`;
    } else {
      getImage = imageNum;
    }

    const date = Pokemonjson[num - 1] || Pokemonjson[0];
    const pokemon: any = {
      id: getImage,
      name: date.name.japanese,
      type: date.type,
      base: {
        hp: date.base.HP,
        att: date.base.Attack,
        def: date.base.Defense,
        sp_att: date.base.SpAttack,
        sp_def: date.base.SpDefense,
        speed: date.base.Speed,
      },
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imageNum}.png`,
    };
    return pokemon;
  };

  useEffect(() => {
    if (id === 0) {
      return;
    }
    const pokemon = pokemonDate(id);
    setPid(pokemon.id);
    setPname(pokemon.name);
    setPtype(pokemon.type);
    setPbaseAtt(pokemon.base.att);
    setPbaseDef(pokemon.base.def);
    setPbaseSp_att(pokemon.base.sp_att);
    setPbaseSp_def(pokemon.base.sp_def);
    setPbaseSpeed(pokemon.base.speed);
    setPimage(pokemon.image);
  }, []);

  return (
    <>
      <GridCard>
        <Card
          image={pImage}
          id={pid}
          name={pname}
          type={ptype}
          att={pbaseAtt}
          def={pbaseDef}
          sp_att={pbaseSp_att}
          sp_def={pbaseSp_def}
          speed={pbaseSpeed}
        ></Card>
      </GridCard>
    </>
  );
  return <div>PokemonAllFeatch</div>;
};
