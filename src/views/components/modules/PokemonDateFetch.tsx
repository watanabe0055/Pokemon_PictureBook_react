import React, { useState, useEffect } from "react";

//import Data from "../../date/pokedex";
import Pokemonjson from "../../date/pokedex.json";
import { InputId } from "../atom/InputId";

// pokedex.jsonからデータを取得する
export const PokemonDateFetch: any = (num: number) => {
  const [pid, setPid] = useState(0);
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbase, setPbase] = useState("");
  const print = (num: number) => {
    const pokemon = pokemonDate(num);
    setPid(pokemon.id);
    setPname(pokemon.name);
    setPtype(pokemon.type);
    setPbase(pokemon.base.att);
    console.log(pokemon);
  };

  const pokemonDate = (num: number) => {
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
      <p>{pid}</p>
      <p>{pname}</p>
      <p>{ptype}</p>
      <p>{pbase}</p>
    </>
  );
};
