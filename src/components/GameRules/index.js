import { useState } from "react";
import { Container, ButtonRules, Rules } from "./style";

import GlobalStyle from "../../Global/globalStyles";

import RulesImg from '../../images/image-rules-bonus.svg'
import Close from '../../images/icon-close.svg'

const GameRules = () => {

    const [showRules, setShowRules] = useState(false)

    const handleShowRules = () => {

        if(showRules){

            setShowRules(false)
        }else{

            setShowRules(true)
        }

    }

    return(

        <Container>
            <GlobalStyle stateOverflow={showRules} />
            <ButtonRules onClick={handleShowRules}>RULES</ButtonRules>
            <Rules render={showRules}>
                <div>
                    <div className="rulesCloseBtn">
                        <span>RULES</span>
                        <img onClick={handleShowRules}
                             alt="close-rules" 
                             src={Close} 
                        />
                    </div>
                    <img alt="Rules" src={RulesImg}></img>
                </div>
            </Rules>
        </Container>
    )
}

export default GameRules