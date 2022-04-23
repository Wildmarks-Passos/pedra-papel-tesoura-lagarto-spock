import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border: solid 2px white;
    border-radius: 15px;
    padding: 20px;
`

export const GameName = styled.div`

    

`

export const GameScore = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 0 50px;
    background-color: #fafafa;
    border-radius: 10px;

    h5{
        color: var(--Score-Text);
        letter-spacing: 0.4px;
        font-weight: 400;
    }

    p{
        font-size: 45px;
        font-weight: 700;
        color: var(--Dark-Text);
    }
`