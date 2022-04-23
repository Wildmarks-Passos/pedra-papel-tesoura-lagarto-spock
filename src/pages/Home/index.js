import { Body, Header } from "./style";

import MenuTop from "../../components/MenuTop"
import GameBoard from "../../components/GameBoard";

const Home = () => {

    return(

        <Body>
            <Header>
                <MenuTop />
                <GameBoard />
            </Header>
        </Body>
    )
}

export default Home;