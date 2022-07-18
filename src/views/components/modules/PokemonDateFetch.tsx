import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Pokemonjson from "../../date/pokedex.json";

import Button from "../atom/Button";
import ModalCard from "../atom/ModalCard";
import icon_search from "../asset/icon_search.svg";
import close from "../asset/close.svg";

const InputNumber = styled.input`
  margin: 15px;
  width: 230px;
  border: 1px solid #79b4b7;
  border-radius: 5px;
  &::placeholder {
    padding-left: 5px;
    font-size: 0.8em;
  }
`;

const SearchIcon = styled.img`
  width: 45px;
  height: auto;
`;
const CancelIcon = styled.img`
  width: 27px;
  height: auto;
  float: right;
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

// pokedex.jsonからデータを取得する
export const PokemonDateFetch: any = (num: number = 1) => {
  const [showCardModal, setShowCardModal] = useState(false);
  const [pid, setPid] = useState();
  const [pname, setPname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbaseAtt, setPbaseAtt] = useState("");
  const [pbaseDef, setPbaseDef] = useState("");
  const [pbaseSp_att, setPbaseSp_att] = useState("");
  const [pbaseSp_def, setPbaseSp_def] = useState("");
  const [pbaseSpeed, setPbaseSpeed] = useState("");
  const [pImage, setPimage] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);

  const print = (num: number = 1) => {
    //検索不可能なポケモンを選択した時に、モーダルを非表示にする
    if (num === 0 || num > 809) {
      setShowCardModal(false);
      return;
    }
    //検索可能なポケモンの時は、モーダルを表示する
    const pokemon = pokemonDate(num);
    setShowCardModal(true);
    setPid(pokemon.id);
    setPname(pokemon.name);
    setPtype(pokemon.type);
    setPbaseAtt(pokemon.base.att);
    setPbaseDef(pokemon.base.def);
    setPbaseSp_att(pokemon.base.sp_att);
    setPbaseSp_def(pokemon.base.sp_def);
    setPbaseSpeed(pokemon.base.speed);
    setPimage(pokemon.image);
    setShowSearchModal(false);
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
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imageNum}.png`,
    };
    return pokemon;
  };

  const closeModal = () => {
    document.body.style.overflow = "hidden";
    setShowCardModal(false);
    setShowSearchModal(false);
  };
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };
  const ableScroll = () => {
    document.body.style.overflow = "auto";
  };
  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  return (
    <>
      <SearchIcon
        src={icon_search}
        alt="My Happy SVG"
        onClick={openSearchModal}
      />
      <Modal
        isOpen={showSearchModal}
        ariaHideApp={false}
        onRequestClose={() => setShowSearchModal(false)}
        onAfterOpen={disableScroll}
        onAfterClose={ableScroll}
      >
        <p>検索画面</p>
        <CancelIcon src={close} alt="My Happy SVG" onClick={closeModal} />
        <InputNumber
          type="number"
          placeholder="ID番号を入力してください"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value: any = Number(event.target.value);
            print(value);
          }}
        />
        <Button></Button>
      </Modal>

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
          image={pImage}
          id={pid}
          name={pname}
          type={ptype}
          att={pbaseAtt}
          def={pbaseDef}
          sp_att={pbaseSp_att}
          sp_def={pbaseSp_def}
          speed={pbaseSpeed}
        ></ModalCard>
      </Modal>
    </>
  );
};
