import { Container, Pick } from "./style";

import triangle from "../../images/bg-pentagon.svg"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import lizard from "../../images/icon-lizard.svg"
import cyan from "../../images/icon-spock.svg"

const PlayerPick = () => {

    return (

        <Container>
            <img alt="triangle" src={triangle}></img>
            <Pick borderBG={'var(--Scissors-Gradient)'} top={-60} right={164.5-60}>
                <img alt="scissors" src={scissors}></img>
            </Pick>
            <Pick borderBG={'var(--Cyan)'} top={80} left={-60}>
                <img alt="cyan" src={cyan}></img>
            </Pick>
            <Pick borderBG={'var(--Paper-Gradient)'} top={80} right={-60}>
                <img alt="paper" src={paper}></img>
            </Pick>
            <Pick borderBG={'var(--Lizard-Gradient)'} bottom={-60} left={0}>
                <img alt="lizard" src={lizard}></img>
            </Pick>
            <Pick borderBG={'var(--Rock-Gradient)'} bottom={-60} right={0}>
                <img alt="rock" src={rock}></img>
            </Pick>
        </Container>
    )
}

export default PlayerPick