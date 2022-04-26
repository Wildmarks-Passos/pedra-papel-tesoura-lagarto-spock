import { Container, ButtonRules, Rules } from "./style";

import RulesImg from '../../images/image-rules-bonus.svg'

const GameRules = () => {

    return(

        <Container>
            <ButtonRules>RULES</ButtonRules>
            <Rules>
                <img alt="Rules" src={RulesImg}></img>
            </Rules>
        </Container>
    )
}

export default GameRules