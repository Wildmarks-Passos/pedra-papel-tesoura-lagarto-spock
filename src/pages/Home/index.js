import { useEffect, useState } from "react";
import { Container } from "./style";

import MenuTop from "../../components/MenuTop"
import GameBoard from "../../components/GameBoard";
import GameRules from "../../components/GameRules";

const Home = () => {

    if(!localStorage.getItem('userScore')){

        localStorage.setItem('userScore', 0)
    }

    const [score, setScore] = useState(Number(localStorage.getItem('userScore')))

    const getScore = () => {

        setScore(() => score + 1)
    }

    useEffect(() => {

        localStorage.setItem('userScore', score)

    }, [score])


    return(

        <Container>
            <MenuTop score={score}/>
            <GameBoard getScore={getScore}/>
            <GameRules />
        </Container>
    )
}

export default Home;