import { Container, ButtonRules, Rules } from "./style";

import RulesImg from '../../images/image-rules-bonus.svg'
import Close from '../../images/icon-close.svg'

const GameRules = () => {

    return(

        <Container>
            <ButtonRules>RULES</ButtonRules>
            <Rules>
                <div>
                    <div>
                        <span>Rules</span>
                        <img alt="close-rules" src={Close} />
                    </div>
                    <img alt="Rules" src={RulesImg}></img>
                </div>
            </Rules>
        </Container>
    )
}

export default GameRules