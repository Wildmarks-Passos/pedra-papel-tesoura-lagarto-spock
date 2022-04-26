import { useEffect, useState } from "react";
import { Board } from "./style";

import StepPlayerPick from "../StepPlayerPick";
import StepWinner from "../StepWinner";

const GameBoard = () => {

    const rules = {

        scissors:{
            winner: [
                'paper',
                'lizard'
            ],
            losses: [
                'rock',
                'cyan'
            ]
        },
        paper:{
            winner: [
                'rock',
                'cyan'
            ],
            losses: [
                'scissors',
                'lizard'
            ]
        },
        rock:{
            winner: [
                'scissors',
                'lizard'
            ],
            losses: [
                'paper',
                'cyan'
            ]
        },
        lizard:{
            winner: [
                'cyan',
                'paper'
            ],
            losses: [
                'rock',
                'scissors'
            ]
        },
        cyan:{
            winner: [
                'scissors',
                'rock'
            ],
            losses: [
                'lizard',
                'paper'
            ]
        }
    }

    
    const [userPick, setUserPick] = useState(null)
    const [housePick, setHousePick] = useState(null)
    const [isWinner, setIsWinner] = useState(null)

    function getUserPick(e) {


        let pick = e.target.getAttribute('value')
    
        setUserPick(pick)

        getHousePick()
    }

    
    function getHousePick() {
        
        let number = Math.floor(getRandomArbitrary(1, 6))
        let pick = null
        
        if(number === 1){
            
            pick = 'scissors'
        }
        else if(number === 2){
            
            pick = 'cyan'
        }

        else if(number === 3){
            
            pick = 'paper'
        }

        else if(number === 4){
            
            pick = 'lizard'
        }

        else if(number === 5){
            
            pick = 'rock'
        }

        setTimeout(() => {
            
            setHousePick(pick)

            
        }, 1500)
    }

    function getRandomArbitrary( min, max ) {

        return Math.random() * (max - min) + min;
    }
    
    function checkIsWinner( userPick, housePick ) {

        let winnersAndLosses = rules[userPick]

        if(winnersAndLosses.winner.includes(housePick)){

            setIsWinner('YOU WIN')

        }else if(winnersAndLosses.losses.includes(housePick)){

            setIsWinner('YOU LOSS')

        }else{

            setIsWinner('TIE')

        }
        
    }

    function btnPlayAgain() {

        setHousePick(null)
        setUserPick(null)
    }

    useEffect(() => {

        if(housePick === null){
            return
        }

        checkIsWinner(userPick, housePick)

    }, [housePick])
    
        return(
            <Board>
                <StepPlayerPick render={userPick === null ? true : false} getUserPick={getUserPick} />
                <StepWinner 
                    render={userPick !== null ? true : false}
                    userPick={userPick}
                    housePick={housePick}
                    btnPlayAgain={btnPlayAgain}
                    isWinner={isWinner} 
                />
            </Board>
        )
}

export default GameBoard