import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 90px;
  }
`;

export const PlayerPick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
`;

export const TextPlayer = styled.h3`
  font-weight: 600;
  letter-spacing: 1.5px;
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Pick = styled.div`
  position: relative;
  display: ${(props) => (props.render === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 220px;
  background-color: #fff;

  border-radius: 50%;
  background: ${(props) => props.borderBG};
  box-shadow: ${(props) =>
    props.isWinner
      ? `${props.borderShadowBG} 0px 5px 0px 0px,
         rgb(31 55 86 / 80%) 0px 0px 0px 75px,
         rgb(31 55 86 / 60%) 0px 0px 0px 150px,
         rgb(31 55 86 / 40%) 0px 0px 0px 225px
         `
      : `${props.borderShadowBG} 0px 5px 0px 0px`};
  transition: all 0.4s ease 0.3s;
  z-index: 3;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-repeat: no-repeat;
    background-position: center center;
    background-color: white;
    border-radius: 50%;
    width: 80%;
    height: 80%;
    box-shadow: rgb(204 204 204) 0px 6px 0px 0px inset;
  }

  @media (max-width: 768px) {
    width: 130px;
    height: 130px;

    box-shadow: ${(props) =>
      props.isWinner
        ? `${props.borderShadowBG} 0px 5px 0px 0px,
         rgb(31 55 86 / 80%) 0px 0px 0px 15px,
         rgb(31 55 86 / 60%) 0px 0px 0px 35px,
         rgb(31 55 86 / 40%) 0px 0px 0px 65px
         `
        : `${props.borderShadowBG} 0px 5px 0px 0px`};
  }
`;

export const LoadingHousePick = styled.div`
  display: ${(props) => (props.render === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 200px;
  background-color: hsl(237, 49%, 15%);

  border-radius: 50%;

  @media (max-width: 768px) {
    width: 115px;
    height: 115px;
  }
`;

export const ContainerPlayAgain = styled.div`
  display: ${(props) => (props.render === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;

  gap: 20px;

  h2 {
    font-size: 35px;
    letter-spacing: 1px;
  }

  button {
    position: relative;
    width: 145px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    font-size: 10px;
    color: var(--Dark-Text);
    font-weight: 600;
    transition: all ease 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: all ease 0.2s;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / 3;
    order: 3;

    h2 {
      font-size: 40px;
    }

    button {
      width: 220px;
      height: 50px;
    }
  }
`;
