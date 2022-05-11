import { Container, Pick } from "./style";

import triangle from "../../images/bg-pentagon.svg";
import rock from "../../images/icon-rock.svg";
import paper from "../../images/icon-paper.svg";
import scissors from "../../images/icon-scissors.svg";
import lizard from "../../images/icon-lizard.svg";
import cyan from "../../images/icon-spock.svg";

const StepPlayerPick = (props) => {
  return (
    <Container>
      <img alt="triangle" src={triangle}></img>

      <Pick
        borderShadowBG={"var(--scissors-shadow)"}
        onClick={(e) => props.getUserPick(e)}
        borderBG={"var(--scissors-gradient)"}
        top={-60}
        right={164.5 - 60}
        value={"scissors"}
      >
        <div
          value={"scissors"}
          style={{ backgroundImage: `url("${scissors}")` }}
        />
      </Pick>

      <Pick
        borderShadowBG={"var(--cyan-shadow)"}
        onClick={(e) => props.getUserPick(e)}
        borderBG={"var(--cyan-gradient)"}
        top={80}
        left={-60}
        value={"cyan"}
      >
        <div value={"cyan"} style={{ backgroundImage: `url("${cyan}")` }} />
      </Pick>

      <Pick
        borderShadowBG={"var(--paper-shadow)"}
        onClick={(e) => props.getUserPick(e)}
        borderBG={"var(--paper-gradient)"}
        top={80}
        right={-60}
        value={"paper"}
      >
        <div value={"paper"} style={{ backgroundImage: `url("${paper}")` }} />
      </Pick>

      <Pick
        borderShadowBG={"var(--lizard-shadow)"}
        onClick={(e) => props.getUserPick(e)}
        borderBG={"var(--lizard-gradient)"}
        bottom={-60}
        left={0}
        value={"lizard"}
      >
        <div value={"lizard"} style={{ backgroundImage: `url("${lizard}")` }} />
      </Pick>

      <Pick
        borderShadowBG={"var(--rock-shadow)"}
        onClick={(e) => props.getUserPick(e)}
        borderBG={"var(--rock-gradient)"}
        bottom={-60}
        right={0}
        value={"rock"}
      >
        <div value={"rock"} style={{ backgroundImage: `url("${rock}")` }} />
      </Pick>
    </Container>
  );
};

export default StepPlayerPick;
