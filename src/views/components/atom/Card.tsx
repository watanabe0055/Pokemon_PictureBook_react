import React from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  width: 280px;
  height: 300px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px #ccc;
  background-color: #f9f9f9;
`;

const CardItems = styled.div`
  display: flex;
`;

export const Card = ({ children }: any) => {
  console.log(children);
  return (
    <PokemonCard>
      <CardItems>
        <p>No:</p>
        <div>{children[0]}</div>
      </CardItems>
      <CardItems>
        <p>名前:</p>
        <div>{children[1]}</div>
      </CardItems>
      <CardItems>
        <p>タイプ:</p>
        <div>{children[2]}</div>
      </CardItems>

      <CardItems>
        <p>攻撃：</p>
        <div>{children[3]}</div>
      </CardItems>

      <CardItems>
        <p>防御：</p>
        <div>{children[4]}</div>
      </CardItems>

      <CardItems>
        <p>特攻：</p>
        <div>{children[5]}</div>
      </CardItems>

      <CardItems>
        <p>特防：</p>
        <div>{children[6]}</div>
      </CardItems>

      <CardItems>
        <p>素早さ:</p>
        <div>{children[7]}</div>
      </CardItems>
    </PokemonCard>
  );
};
