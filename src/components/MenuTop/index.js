import { Container, GameName, GameScore } from './style'

import logo from '../../images/logo-bonus.svg'

const MenuTop = () => {

    return(
        <Container>
            <GameName>
                <img alt='logo' src={logo}></img>
            </GameName>
            <GameScore>
                <h5>SCORE</h5>
                <p>12</p>
            </GameScore>
        </Container>
    )
}

export default MenuTop