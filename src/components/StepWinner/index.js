import { Container, PlayerPick, HousePick, TextPlayer, Pick, ContainerPlayAgain } from "./style";

const StepWinner = (props) => {

    return(

        <Container>
            <PlayerPick>
                <TextPlayer>YOU PICKED</TextPlayer>
                <Pick>
                    <img alt="user pick" src={props.userPick}></img>
                </Pick>
            </PlayerPick>

            <ContainerPlayAgain>
                <h2>{props.isWinner}</h2>
                <button>PLAY AGAIN</button>
            </ContainerPlayAgain>

            <HousePick>
                <TextPlayer>THE HOUSE PICKED</TextPlayer>
                <Pick>
                    <img alt="user pick" src={props.housePick}></img>
                </Pick>
            </HousePick>
        </Container>
    )
}

export default StepWinner