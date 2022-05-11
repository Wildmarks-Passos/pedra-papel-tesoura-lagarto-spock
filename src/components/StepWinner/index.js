import {
  Container,
  PlayerPick,
  LoadingHousePick,
  TextPlayer,
  Pick,
  ContainerPlayAgain,
} from "./style";

import { rules } from "../GameBoard";

import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import lizard from "../../images/icon-lizard.svg";
import cyan from "../../images/icon-spock.svg";

const StepWinner = (props) => {
  return (
    <Container>
      <PlayerPick>
        <TextPlayer>YOU PICKED</TextPlayer>
        <Pick
          isWinner={props.playerWinnerShadow}
          borderShadowBG={`var(--${props.userPick}-shadow)`}
          borderBG={`var(--${props.userPick}-gradient)`}
          render={true}
        >
          <div>
            <img alt="qualquer" src={rules[props.userPick].image} />
          </div>
        </Pick>
      </PlayerPick>

      <ContainerPlayAgain render={props.housePick !== null ? true : false}>
        <h2>{props.isWinnerMessage}</h2>
        <button onClick={props.btnPlayAgain}>PLAY AGAIN</button>
      </ContainerPlayAgain>

      <PlayerPick>
        <TextPlayer>THE HOUSE PICKED</TextPlayer>
        <LoadingHousePick render={props.housePick === null ? true : false} />
        <Pick
          isWinner={props.computerWinnerShadow}
          borderShadowBG={`var(--${props.housePick}-shadow)`}
          borderBG={`var(--${props.housePick}-gradient)`}
          render={props.housePick ? true : false}
        >
          <div>
            {props.housePick === "rock" ? (
              <img alt="qualquer" src={rock} />
            ) : props.housePick === "paper" ? (
              <img alt="qualquer" src={paper} />
            ) : props.housePick === "scissors" ? (
              <img alt="qualquer" src={scissors} />
            ) : props.housePick === "lizard" ? (
              <img alt="qualquer" src={lizard} />
            ) : (
              <img alt="qualquer" src={cyan} />
            )}
          </div>
        </Pick>
      </PlayerPick>
    </Container>
  );
};

export default StepWinner;
