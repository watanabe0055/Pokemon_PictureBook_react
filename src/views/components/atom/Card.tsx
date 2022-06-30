import React from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  width: 280px;
  min-height: 320px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  background-color: #f9f9f9;
`;

const CardItems = styled.div`
  display: flex;
  margin-left: 5px;
  padding: 10px;
`;
const Img = styled.img`
  height: 100px;
  width: 100px;
`;

export const Card = (props: any) => {
  let { image, id, name, type, att, def, sp_att, sp_def, speed } = props;
  console.log(image);

  return (
    <PokemonCard>
      <CardItems>
        <Img
          src={
            image ||
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          }
          alt={`${name}の画像`}
        />
      </CardItems>
      <CardItems>
        <p>No:</p>
        <div>{id || "001"}</div>
      </CardItems>
      <CardItems>
        <p>名前:</p>
        <div>{name || "フシギダネ"}</div>
      </CardItems>
      {/* <CardItems>
        <p>タイプ:</p>
        <div>{type}</div>
      </CardItems>

      <CardItems>
        <p>攻撃：</p>
        <div>{att}</div>
      </CardItems>

      <CardItems>
        <p>防御：</p>
        <div>{def}</div>
      </CardItems>

      <CardItems>
        <p>特攻：</p>
        <div>{sp_att}</div>
      </CardItems>

      <CardItems>
        <p>特防：</p>
        <div>{sp_def}</div>
      </CardItems>

      <CardItems>
        <p>素早さ:</p>
        <div>{speed}</div>
      </CardItems> */}
    </PokemonCard>
  );
};
