import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: end;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba( 0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    & :active {

        overflow: hidden;

    }

    div{
        background-color: white;
        padding: 15px 10px;
        border-radius: 10px;
    }
`