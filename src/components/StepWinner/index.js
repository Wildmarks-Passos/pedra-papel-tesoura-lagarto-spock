import { Container, PlayerPick, LoadingHousePick, TextPlayer, Pick, ContainerPlayAgain } from "./style";

import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import lizard from "../../images/icon-lizard.svg"
import cyan from "../../images/icon-spock.svg"

const StepWinner = (props) => {

    return(

        <Container render={props.render}>
            <PlayerPick>
                <TextPlayer>YOU PICKED</TextPlayer>
                <Pick borderBG={'var(--Rock-Gradient)'} render={props.userPick === 'rock' ? true : false}>
                    <img alt="user pick" src={rock}></img>
                </Pick>
                <Pick borderBG={'var(--Paper-Gradient)'} render={props.userPick === 'paper' ? true : false}>
                    <img alt="user pick" src={paper}></img>
                </Pick>
                <Pick borderBG={'var(--Scissors-Gradient)'} render={props.userPick === 'scissors' ? true : false}>
                    <img alt="user pick" src={scissors}></img>
                </Pick>
                <Pick borderBG={'var(--Lizard-Gradient)'} render={props.userPick === 'lizard' ? true : false}>
                    <img alt="user pick" src={lizard}></img>
                </Pick>
                <Pick borderBG={'var(--Cyan)'} render={props.userPick === 'cyan' ? true : false}>
                    <img alt="user pick" src={cyan}></img>
                </Pick>
            </PlayerPick>

            <ContainerPlayAgain render={props.housePick !== null ? true : false}>
                <h2>{props.isWinner}</h2>
                <button onClick={props.btnPlayAgain}>PLAY AGAIN</button>
            </ContainerPlayAgain>

            <PlayerPick>
                <TextPlayer>THE HOUSE PICKED</TextPlayer>
                <LoadingHousePick render={props.housePick === null ? true : false} />
                <Pick borderBG={'var(--Rock-Gradient)'} render={props.housePick === 'rock' ? true : false}>
                    <img alt="user pick" src={rock}></img>
                </Pick>
                <Pick borderBG={'var(--Paper-Gradient)'} render={props.housePick === 'paper' ? true : false}>
                    <img alt="user pick" src={paper}></img>
                </Pick>
                <Pick borderBG={'var(--Scissors-Gradient)'} render={props.housePick === 'scissors' ? true : false}>
                    <img alt="user pick" src={scissors}></img>
                </Pick>
                <Pick borderBG={'var(--Lizard-Gradient)'} render={props.housePick === 'lizard' ? true : false}>
                    <img alt="user pick" src={lizard}></img>
                </Pick>
                <Pick borderBG={'var(--Cyan)'} render={props.housePick === 'cyan' ? true : false}>
                    <img alt="user pick" src={cyan}></img>
                </Pick>
            </PlayerPick>
        </Container>
    )
}

export default StepWinner