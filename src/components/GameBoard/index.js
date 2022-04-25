import { useState } from "react";
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
            loses: [
                'rock',
                'cyan'
            ]
        },
        paper:{
            winner: [
                'rock',
                'cyan'
            ],
            loses: [
                'scissors',
                'lizard'
            ]
        },
        rock:{
            winner: [
                'scissors',
                'lizard'
            ],
            loses: [
                'paper',
                'cyan'
            ]
        },
        lizard:{
            winner: [
                'cyan',
                'paper'
            ],
            loses: [
                'rock',
                'scissors'
            ]
        },
        cyan:{
            winner: [
                'scissors',
                'rock'
            ],
            loses: [
                'lizard',
                'paper'
            ]
        }
    }

    const [userPick, setUserPick] = useState(null)
    const [housePick, setHousePick] = useState(null)

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

            console.log(rules.cyan.winner)
        }, 1500)
    }

    function getRandomArbitrary( min, max ) {

        return Math.random() * (max - min) + min;
    }

    function checkIsWinner( userPick, housePick ) {

        if(userPick in `${rules}.${housePick}.winner`){

            console.log('Perdeu')
        }
    }
    
    // function renderBoardState(e) {

    // }
    
        return(
    
            <Board>
                <StepPlayerPick render={true} getUserPick={getUserPick} />
                <StepWinner 
                    render={true}
                    userPick={userPick}
                    housePick={housePick}
                    // isWinner={} 
                />
            </Board>
        )
}

export default GameBoard