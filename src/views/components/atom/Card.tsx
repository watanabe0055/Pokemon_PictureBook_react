import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

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

  const pokemonCardOnclick = () => {
    Modal(props);
  };
  return (
    <PokemonCard onClick={pokemonCardOnclick}>
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
    </PokemonCard>
  );
};
