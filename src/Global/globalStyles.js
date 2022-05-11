import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        
        // Colors

        // Primary

        --scissors-gradient: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
        --scissors-shadow: #c56e1f;
        --paper-gradient: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
        --paper-shadow: #2645c2;
        --rock-gradient: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
        --rock-shadow: #a11434;
        --lizard-gradient: linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
        --lizard-shadow: #5f37aa;
        --cyan-gradient: linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
        --cyan-shadow: #2d8fac;

        // Neutral

        --Dark-Text: hsl(229, 25%, 31%);
        --Score-Text: hsl(229, 64%, 46%);
        --Header-Outline: hsl(217, 16%, 45%);

        // Background

        --Radial-Gradient: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));


        // Fonts

        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        overflow: ${(props) =>
          props.stateOverflow === true ? "hidden" : "initial"};
    }

    h1, h2 {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
