import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ffff00 transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
