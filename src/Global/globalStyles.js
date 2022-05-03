import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root{
        
        // Colors

        // Primary

        --Scissors-Gradient: hsl(39, 89%, 49%);
        --Scissors-Gradient-shadow: hsl(40, 84%, 53%);
        --Paper-Gradient: hsl(230, 89%, 62%);
        --Paper-Gradient-shadow: hsl(230, 89%, 65%);
        --Rock-Gradient: hsl(349, 71%, 52%);
        --Rock-Gradient-shadow: hsl(349, 70%, 56%);
        --Lizard-Gradient: hsl(261, 73%, 60%);
        --Lizard-Gradient-shadow: hsl(261, 72%, 63%);
        --Cyan: hsl(189, 59%, 53%);
        --Cyan-shadow: hsl(189, 58%, 57%);

        // Neutral

        --Dark-Text: hsl(229, 25%, 31%);
        --Score-Text: hsl(229, 64%, 46%);
        --Header-Outline: hsl(217, 16%, 45%);

        // Background

        --Radial-Gradient: linear-gradient(90deg, hsl(214, 47%, 23%), hsl(237, 49%, 15%));


        // Fonts

        font-family: 'Barlow Semi Condensed', sans-serif;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        overflow: ${props => props.stateOverflow === true ? 'hidden' : 'initial'};
    }

    h1, h2 {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle;