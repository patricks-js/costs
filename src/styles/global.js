import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Presets */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    :root {
        /* FONTS */
        --font-title:  'Poppins', sans-serif;
        --font-text: 'Rubik', sans-serif;

        /* COLORS */
        --color-dark: #1a1a1a;
        /* --color-font:;*/
        --color-alt: #2d79c7;
        --color-light: #f8f8f8; 
        --color-placeholder: #8d8d8d;
        --color-font: #5a5a5a;

        /* VALUES */
        --header-height: 6.5rem;
        --gap: 2rem;
    }

    body {
        font-family: var(--font-text);
        font-size: 100%;
        width: 100%;
        height: 100vh;
        background-color: var(--color-light);
        color: var(--color-font);
        main, header, footer {
            > div {
                padding: 0 4%;
            }
        }
        main {
            width: 100%;
            height: 100%;
            min-height: 70vh;   
            > div {
                margin:20px 0 ;
            }
        }
    }

    h1, h2 {
        color: var(--color-dark);
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button, fieldset {
        border: none;
    }

    img {
        width: 100%;
    }

`;
