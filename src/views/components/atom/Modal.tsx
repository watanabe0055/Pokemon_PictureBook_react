import React from "react";
import styled from "styled-components";

const PokemonModal = styled.div`
  border: 1px solid red;
`;
const Modal = () => {
  return (
    <>
      <PokemonModal>modalです</PokemonModal>
    </>
  );
};

export default Modal;
