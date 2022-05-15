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
    borderShadowBG: "--scissors-shadow",
    borderBG: "--scissors-gradient",
    position: {
      top: -60,
      right: 164.5 - 60,
      bottom: null,
      left: null,
    },
    winner: ["paper", "lizard"],
    losses: ["rock", "cyan"],
  },
  paper: {
    image: paper,
    borderShadowBG: "--paper-shadow",
    borderBG: "--paper-gradient",
    position: {
      top: 60,
      right: -60,
      bottom: null,
      left: null,
    },
    winner: ["rock", "cyan"],
    losses: ["scissors", "lizard"],
  },
  rock: {
    image: rock,
    borderShadowBG: "--rock-shadow",
    borderBG: "--rock-gradient",
    position: {
      top: null,
      right: 0,
      bottom: -60,
      left: null,
    },
    winner: ["scissors", "lizard"],
    losses: ["paper", "cyan"],
  },
  lizard: {
    image: lizard,
    borderShadowBG: "--lizard-shadow",
    borderBG: "--lizard-gradient",
    position: {
      top: null,
      right: null,
      bottom: -60,
      left: 0,
    },
    winner: ["cyan", "paper"],
    losses: ["rock", "scissors"],
  },
  cyan: {
    image: cyan,
    borderShadowBG: "--cyan-shadow",
    borderBG: "--cyan-gradient",
    position: {
      top: 60,
      right: null,
      bottom: null,
      left: -60,
    },
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
