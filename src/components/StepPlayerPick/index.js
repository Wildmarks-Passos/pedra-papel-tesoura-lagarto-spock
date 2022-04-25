import { Container, Pick } from "./style";

import triangle from "../../images/bg-pentagon.svg"
import rock from "../../images/icon-rock.svg"
import paper from "../../images/icon-paper.svg"
import scissors from "../../images/icon-scissors.svg"
import lizard from "../../images/icon-lizard.svg"
import cyan from "../../images/icon-spock.svg"

const StepPlayerPick = ( props ) => {

    return (

        <Container render={props.render}>
            <img alt="triangle" src={triangle}></img>

            <Pick 
                onClick={(e) => props.getUserPick(e)}
                borderBG={'var(--Scissors-Gradient)'} 
                top={-60} 
                right={164.5-60}
                value={'scissors'}
            >
                <img value={'scissors'} alt="scissors" src={scissors}></img>
            </Pick>

            <Pick 
                onClick={(e) => props.getUserPick(e)}
                borderBG={'var(--Cyan)'} 
                top={80} 
                left={-60}
                value={'cyan'}
            >
                <img value={'cyan'} alt="cyan" src={cyan}></img>
            </Pick>
            
            <Pick 
                onClick={(e) => props.getUserPick(e)}
                borderBG={'var(--Paper-Gradient)'} 
                top={80} 
                right={-60}
                value={'paper'}
            >
                <img value={'paper'} alt="paper" src={paper}></img>
            </Pick>
            
            <Pick 
                onClick={(e) => props.getUserPick(e)}
                borderBG={'var(--Lizard-Gradient)'} 
                bottom={-60} 
                left={0}
                value={'lizard'}
            >
                <img value={'lizard'} alt="lizard" src={lizard}></img>
            </Pick>
            
            <Pick 
                onClick={(e) => props.getUserPick(e)}
                borderBG={'var(--Rock-Gradient)'} 
                bottom={-60} 
                right={0}
                value={'rock'}
            >
                <img value={'rock'} alt="rock" src={rock}></img>
            </Pick>
        </Container>
    )
}

export default StepPlayerPick