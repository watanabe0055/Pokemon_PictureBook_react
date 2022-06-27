import React, { useState, useEffect } from "react";

import Pokemonjson from "../../date/pokedex.json";

import { Card } from "../atom/Card";

// pokedex.jsonからデータを取得する
export const PokemonDateFetch: any = (num: number = 1) => {
  const [pid, setPid] = useState();
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbaseAtt, setPbaseAtt] = useState("");
  const [pbaseDef, setPbaseDef] = useState("");
  const [pbaseSp_att, setPbaseSp_att] = useState("");
  const [pbaseSp_def, setPbaseSp_def] = useState("");
  const [pbaseSpeed, setPbaseSpeed] = useState("");
  const [pImage, setPimage] = useState("");
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
    setPimage(pokemon.image);
  };

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
      image: `../../../date/thumbnails/${getImage}.png`,
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
    </>
  );
};
