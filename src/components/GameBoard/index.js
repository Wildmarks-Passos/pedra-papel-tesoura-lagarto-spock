import { useEffect, useState } from "react";
import { Board } from "./style";

import StepPlayerPick from "../StepPlayerPick";
import StepWinner from "../StepWinner";

import scissors from "../../images/icon-scissors.svg";
import paper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import lizard from "../../images/icon-lizard.svg";
import cyan from "../../images/icon-spock.svg";

export const rules = {
  scissors: {
    image: scissors,
    winner: ["paper", "lizard"],
    losses: ["rock", "cyan"],
  },
  paper: {
    image: paper,
    winner: ["rock", "cyan"],
    losses: ["scissors", "lizard"],
  },
  rock: {
    image: rock,
    winner: ["scissors", "lizard"],
    losses: ["paper", "cyan"],
  },
  lizard: {
    image: lizard,
    winner: ["cyan", "paper"],
    losses: ["rock", "scissors"],
  },
  cyan: {
    image: cyan,
    winner: ["scissors", "rock"],
    losses: ["lizard", "paper"],
  },
};

const GameBoard = (props) => {
  const [userPick, setUserPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  const [isWinnerMessage, setIsWinnerMessage] = useState(null);
  const [playerWinnerShadow, setPlayerWinnerShadow] = useState(false);
  const [computerWinnerShadow, setComputerWinnerShadow] = useState(false);

  function getUserPick(e) {
    let pick = e.target.getAttribute("value");

    setUserPick(pick);

    getHousePick();
  }

  function getHousePick() {
    let number = Math.floor(getRandomArbitrary(1, 6));
    let pick = null;

    if (number === 1) {
      pick = "scissors";
    } else if (number === 2) {
      pick = "cyan";
    } else if (number === 3) {
      pick = "paper";
    } else if (number === 4) {
      pick = "lizard";
    } else if (number === 5) {
      pick = "rock";
    }

    setTimeout(() => {
      setHousePick(pick);
    }, 1500);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function checkIsWinner(userPick, housePick) {
    let winnersAndLosses = rules[userPick];

    if (winnersAndLosses.winner.includes(housePick)) {
      setIsWinnerMessage("YOU WIN");
      setPlayerWinnerShadow(true);

      props.getScore();
    } else if (winnersAndLosses.losses.includes(housePick)) {
      setIsWinnerMessage("YOU LOSS");
      setComputerWinnerShadow(true);
    } else {
      setIsWinnerMessage("TIE");
    }
  }

  function btnPlayAgain() {
    setHousePick(null);
    setUserPick(null);
    setComputerWinnerShadow(false);
    setPlayerWinnerShadow(false);
  }

  useEffect(() => {
    if (housePick === null) {
      return;
    }

    checkIsWinner(userPick, housePick);
  }, [housePick]);

  if (!userPick) {
    return (
      <Board>
        <StepPlayerPick getUserPick={getUserPick} />
      </Board>
    );
  } else {
    return (
      <Board>
        <StepWinner
          playerWinnerShadow={playerWinnerShadow}
          computerWinnerShadow={computerWinnerShadow}
          userPick={userPick}
          housePick={housePick}
          btnPlayAgain={btnPlayAgain}
          isWinnerMessage={isWinnerMessage}
        />
      </Board>
    );
  }
};

export default GameBoard;
