import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtonRules = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 8px 30px;
  border-radius: 5px;
  border: solid 1px #fff;
  cursor: pointer;
  box-shadow: 0;
  transition: all ease 0.2s;
  z-index: 5;

  :hover {
    transform: scale(1.1);
    box-shadow: #fff 0px 0px 5px 3px;
    transition: all ease 0.2s;
  }
`;

export const Rules = styled.div`
  position: fixed;
  display: ${(props) => (props.render === true ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  div {
    background-color: white;
    padding: 15px 10px;
    border-radius: 10px;
  }

  .rulesCloseBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;

    span {
      font-weight: 700;
      color: var(--Dark-Text);
      font-size: 25px;
    }

    img {
      cursor: pointer;
    }
  }
`;
