import {
  Container,
  PlayerPick,
  LoadingHousePick,
  TextPlayer,
  Pick,
  ContainerPlayAgain,
} from "./style";

import { rules } from "../GameBoard";

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
            <img alt="User Pick" src={rules[props.userPick].image} />
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
            <img
              alt="House Pick"
              src={props.housePick ? rules[props.housePick].image : null}
            />
          </div>
        </Pick>
      </PlayerPick>
    </Container>
  );
};

export default StepWinner;
