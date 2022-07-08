import React from "react";
import styled from "styled-components";

const PokemonCard = styled.div`
  width: 200px;
  height: 350px;
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
const Modal: any = (props: any) => {
  let {
    showFlag,
    setShowFlag,
    image,
    id,
    name,
    type,
    att,
    def,
    sp_att,
    sp_def,
    speed,
  } = props;

  const closeModal = () => {
    setShowFlag(false);
  };
  return (
    <>
      {showFlag ? (
        <PokemonCard>
          <button onClick={closeModal}>閉じる</button>
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
          <CardItems>
            <InfoValue>タイプ:{type}</InfoValue>
          </CardItems>
          <CardItems>
            <InfoValue>攻撃：{att}</InfoValue>
          </CardItems>
          <CardItems>
            <InfoValue>防御：{def}</InfoValue>
          </CardItems>
          <CardItems>
            <InfoValue>特攻：{sp_att}</InfoValue>
          </CardItems>
          <CardItems>
            <InfoValue>特防：{sp_def}</InfoValue>
          </CardItems>
          <CardItems>
            <InfoValue>素早さ:{speed}</InfoValue>
          </CardItems>
        </PokemonCard>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
