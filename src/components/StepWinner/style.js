import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;

`

export const PlayerPick = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
`

export const TextPlayer = styled.h3`

    font-weight: 600;
    letter-spacing: 1.5px;
`

export const Pick = styled.div`

    display: ${props => props.render === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    width: 220px;
    height: 220px;
    background-color: #fff;

    border-radius: 50%;
    border: solid 25px ${props => props.borderBG};
    
    img{
        width: 80px;
    }
`
export const LoadingHousePick = styled.div`

    display: ${props => props.render === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;
    background-color: hsl(237, 49%, 15%);

    border-radius: 50%;
`

export const ContainerPlayAgain = styled.div`

    display: ${props => props.render === true ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;

    h2{

        font-size: 35px;
        letter-spacing: 1px;
    }

    button{

        width: 145px;
        padding: 10px;
        border-radius: 5px;
        border: none;

        font-size: 10px;
        color: var(--Dark-Text);
        font-weight: 600;

        cursor: pointer;
    }

`