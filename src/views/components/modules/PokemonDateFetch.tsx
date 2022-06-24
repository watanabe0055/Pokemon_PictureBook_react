import React, { useState, useEffect } from "react";

import Pokemonjson from "../../date/pokedex.json";
// import thumbnails from "../../date/thumbnails";

import { Card } from "../atom/Card";

// pokedex.jsonからデータを取得する
export const PokemonDateFetch: any = (num: number) => {
  const [pid, setPid] = useState();
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbaseAtt, setPbaseAtt] = useState("");
  const [pbaseDef, setPbaseDef] = useState("");
  const [pbaseSp_att, setPbaseSp_att] = useState("");
  const [pbaseSp_def, setPbaseSp_def] = useState("");
  const [pbaseSpeed, setPbaseSpeed] = useState("");
  const print = (num: number) => {
    const pokemon = pokemonDate(num);
    setPid(pokemon.id);
    setPname(pokemon.name);
    setPtype(pokemon.type);
    setPbaseAtt(pokemon.base.att);
    setPbaseDef(pokemon.base.def);
    setPbaseSp_att(pokemon.base.sp_att);
    setPbaseSp_def(pokemon.base.sp_def);
    setPbaseSpeed(pokemon.base.speed);
  };

  const pokemonDate = (num: number) => {
    const imageNum: string = String(num);
    if (num > 10) {
      console.log(imageNum);
    }
    const date = Pokemonjson[num - 1] || Pokemonjson[0];
    const pokemon: any = {
      id: date.id,
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
    };
    return pokemon;
  };

  return (
    <>
      <input
        placeholder="0"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value: number = Number(event.target.value);
          print(value);
        }}
      />
      <Card>
        <p>{pid}</p>
        <p>{pname}</p>
        <p>{ptype}</p>
        <p>{pbaseAtt}</p>
        <p>{pbaseDef}</p>
        <p>{pbaseSp_att}</p>
        <p>{pbaseSp_def}</p>
        <p>{pbaseSpeed}</p>
      </Card>
    </>
  );
};
