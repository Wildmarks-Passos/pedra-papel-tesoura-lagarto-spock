import { Container, Pick } from "./style";

import triangle from "../../images/bg-pentagon.svg";
import { rules } from "../GameBoard";

const StepPlayerPick = (props) => {
  return (
    <Container>
      <img alt="triangle" src={triangle}></img>

      {Object.entries(rules).map(([key, value]) => {
        return (
          <Pick
            borderShadowBG={`var(${value.borderShadowBG})`}
            onClick={(e) => props.getUserPick(e)}
            borderBG={`var(${value.borderBG})`}
            top={value.position.top}
            right={value.position.right}
            bottom={value.position.bottom}
            left={value.position.left}
            value={key}
          >
            <div
              value={key}
              style={{ backgroundImage: `url("${value.image}")` }}
            />
          </Pick>
        );
      })}
    </Container>
  );
};

export default StepPlayerPick;
