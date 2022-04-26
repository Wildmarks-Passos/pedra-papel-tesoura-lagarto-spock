import { Container } from "./style";

import MenuTop from "../../components/MenuTop"
import GameBoard from "../../components/GameBoard";
import GameRules from "../../components/GameRules";

const Home = () => {

    return(

        <Container>
            <MenuTop />
            <GameBoard />
            <GameRules />
        </Container>
    )
}

export default Home;