import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: end;
    /* position: absolute; */
    bottom: 20px;
    right: 20px;
`

export const ButtonRules = styled.button`

    background-color: transparent;
    color: #fff;
    padding: 8px 30px;
    border-radius: 5px;
    border: solid 1px #fff;
    cursor: pointer;
`

export const Rules = styled.div`

    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`