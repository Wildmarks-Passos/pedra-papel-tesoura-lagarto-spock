import styled from "styled-components";

export const Container = styled.div`
  display: block;
  position: relative;
`;

export const Pick = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  right: ${(props) => `${props.right}px`};
  bottom: ${(props) => `${props.bottom}px`};

  width: 130px;
  height: 130px;
  background-color: #fff;

  border-radius: 50%;
  background: ${(props) => props.borderBG};
  box-shadow: ${(props) => props.borderShadowBG} 0px 5px 0px 0px;
  transition: all ease 0.2s;
  cursor: pointer;

  &:hover {
    width: 135px;
    height: 135px;
    box-shadow: ${(props) => `${props.borderShadowBG} 0px 5px 0px 0px,
                              #fff 0px 2.5px 5px 7px`};
    transition: all ease 0.2s;
  }

  div {
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
`;
