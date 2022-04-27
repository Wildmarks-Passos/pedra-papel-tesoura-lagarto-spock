import { Container, GameName, GameScore } from './style'

import logo from '../../images/logo-bonus.svg'

const MenuTop = (props) => {

    return(
        <Container>
            <GameName>
                <img alt='logo' src={logo}></img>
            </GameName>
            <GameScore>
                <h5>SCORE</h5>
                <p>{props.score}</p>
            </GameScore>
        </Container>
    )
}

export default MenuTop