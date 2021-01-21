import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    --black: #010101;
    }
    * {
        scroll-margin-top: 2rem;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        font-family: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        color: white;
        background: var(--black);
        overflow-x: hidden;
    }

    h2 {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
    }

    p {
        color: #e6e6e6;
        margin: 0.5rem 0 2rem;
        font-size: 1.125rem;
        line-height: 1.7;
    }

    .time-label {
        font-size: 1rem;
        font-weight: normal;
        letter-spacing: normal;
        margin-top: 0.5rem;
        text-transform: uppercase;
        text-shadow: 0 0 4px black, 0 0 8px black;
    }

    .time__value {
        /* Nudge it a tiny amount to visually center it */
        transform: translateX(2px);
    }

    .budget-value {
        text-align: center;
    }

    .gridItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .grid {
        display: grid;
        grid-template-columns: 1ch repeat(5, 2ch); /* Year is always 1ch wide*/
        gap: 2rem 3rem;
        place-items: center;
    }

    @media only screen and (max-width: 768px) {
        .grid {
            grid-template-columns: repeat(3, auto);
        }
        .budget-value {
            font-size: 2rem;
        }
    }
    @media only screen and (max-width: 360px) {
        .time__value {
            font-size: 2rem;
        }
    }
`;

export default GlobalStyle;
