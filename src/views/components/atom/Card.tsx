import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import ModalCard from "../atom/ModalCard";

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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflowy: "hidden",
  },
};

export const Card = (props: any) => {
  let { image, id, name, type, att, def, sp_att, sp_def, speed } = props;
  const [showCardModal, setShowCardModal] = useState(false);

  const cardHandle = () => {
    setShowCardModal(true);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const ableScroll = () => {
    document.body.style.overflow = "auto";
  };
  const closeModal = () => {
    document.body.style.overflow = "hidden";
    setShowCardModal(false);
  };

  return (
    <>
      <PokemonCard onClick={cardHandle}>
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
      <Modal
        isOpen={showCardModal}
        ariaHideApp={false}
        onRequestClose={() => setShowCardModal(false)}
        style={customStyles}
        onAfterOpen={disableScroll}
        onAfterClose={ableScroll}
      >
        <button onClick={closeModal}>閉じる</button>
        <ModalCard
          image={image}
          id={id}
          name={name}
          type={type}
          att={att}
          def={def}
          sp_att={sp_att}
          sp_def={sp_def}
          speed={speed}
        ></ModalCard>
      </Modal>
    </>
  );
};
