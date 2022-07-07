import React from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  width: 200px;
  height: 180px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  background-color: #f9f9f9;
`;

const CardItems = styled.div`
  padding: 3px;
`;
const Img = styled.img`
  height: 100px;
  width: 100px;
`;

const InfoValue = styled.div`
  margin-left: 25px;
`;

const PokemonImgBox = styled.div`
  text-align: center;
`;

export const Card = (props: any) => {
  let { image, id, name, type, att, def, sp_att, sp_def, speed } = props;
  return (
    <PokemonCard>
      <CardItems>
        <PokemonImgBox>
          <Img
            src={
              image ||
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            }
            alt={`${name}の画像`}
          />
        </PokemonImgBox>
      </CardItems>
      <CardItems>
        <InfoValue>No:{id || "001"}</InfoValue>
      </CardItems>
      <CardItems>
        <InfoValue>{name || "フシギダネ"}</InfoValue>
      </CardItems>
      {/* <CardItems>
        <p>タイプ:</p>
        <InfoValue>{type}</InfoValue>
      </CardItems>

      <CardItems>
        <p>攻撃：</p>
        <InfoValue>{att}</InfoValue>
      </CardItems>

      <CardItems>
        <p>防御：</p>
        <InfoValue>{def}</InfoValue>
      </CardItems>

      <CardItems>
        <p>特攻：</p>
        <InfoValue>{sp_att}</InfoValue>
      </CardItems>

      <CardItems>
        <p>特防：</p>
        <InfoValue>{sp_def}</InfoValue>
      </CardItems>

      <CardItems>
        <p>素早さ:</p>
        <InfoValue>{speed}</InfoValue>
      </CardItems> */}
    </PokemonCard>
  );
};
