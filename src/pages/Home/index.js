import { Container } from "./style";

import MenuTop from "../../components/MenuTop"
import GameBoard from "../../components/GameBoard";

const Home = () => {

    return(

        <Container>
            <MenuTop />
            <GameBoard />
        </Container>
    )
}

export default Home;