import React from "react";
import styled from "styled-components";

const SearchButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0.5em 2em;
  width: 150px;
  color: #2285b1;
  font-size: 18px;
  font-weight: 700;
  border: 2px solid #2285b1;
  border-radius: 10px;
  ::after {
    content: "";
    width: 5px;
    height: 5px;
    border-top: 3px solid #2285b1;
    border-right: 3px solid #2285b1;
    transform: rotate(45deg);
  }
  :hover {
    color: #333333;
    text-decoration: none;
    background-color: #a0c4d3;
  }
  :hover::after {
    border-top: 3px solid #333333;
    border-right: 3px solid #333333;
  }
`;
const Button = (props: any) => {
  console.log("button atom");
  return <SearchButton onClick={props.handleClick}>検索</SearchButton>;
};

export default Button;
