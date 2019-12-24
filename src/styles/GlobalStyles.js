import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  

  /* CSS Reset */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
    line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    /* End CSS Reset */
    body {
    overflow: visible;
    min-height: 100%;
    min-height: 100vh;
    font-family: 'Cerebri', Helvetica, Arial, sans-serif;
    font-weight: normal;
    background: #fff; /* Old browsers */
    }
    body p {
    font-weight: 300;
    font-size: 20px;
    }
    h1, h2 {
    font-family: 'Cerebri', Helvetica, Arial, sans-serif;
    }
    h1,h2,h3,h4,h5,h6,a {
    font-family: 'Cerebri', Helvetica, Arial, sans-serif;
    font-weight: 500;
    }
    a {
    text-decoration: none;
    color: #191919;
    }
    p,h1,h2,h3,h4,h5,h6 {
    color: #191919;
    }
    textarea, input, button { outline: none; }
    button {
        background: none;
    border: none;
    border: 1px solid #191919;
    padding: 14px 18px;
    font-family: 'Cerebri', Helvetica, Arial, sans-serif;
    font-size: .8em;
    text-transform: uppercase;
    }
    button.blue {
    background: rgb(162, 166, 226);
    color: #fff;
    }
    button.black {
    background: #191919;
    color: #fff;
    }
    button:hover {
    -webkit-transition: color .3s ease, background-color .3s ease; /* Safari */
    transition: color .3s ease, background-color .3s ease;
    }
    button:active {
        position:relative;
    }
    ::selection {
    background: #f0ba45; /*WebKit/Blink Browsers*/
    }
    ::-moz-selection {
    background: #f0ba45; /* Gecko Browsers */
    }
    /* App */
    .App {
    position: relative;
    width: 100%;
    height: auto;
    text-align: center;
    }
    #App {
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    overflow: hidden;
    }
    .main {
    position: relative;
    display: flex;
    min-height: 100vh;
    max-width: 100vw;
    max-width: 100%;
    overflow:hidden;
    flex-direction: column;
    }
    section {
    position: relative;
    }
    .flex-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    }
    .full-height-section {
    height: auto;
    min-height: 100vh;
    }
    .jo-row {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    clear: both;
    }
    .jo-content {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 900px;
    margin: auto;
    padding: 20px;
    }
    .jo-content .snippetcpt-wrap pre {
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }
    .jo-content ul {
    list-style: disc;
    list-style-position: inside;
    }
    .jo-section-half {
    width: 50%;
    height: auto;
    max-height: 100%; 
    }
    .jo-left-align {
    text-align: left;
    }
    .jo-right-align {
    text-align: right;
    }
    .icon-17 {
    color: #cd5fa1;
    fill: #cd5fa1;
    }
    .icon-13 {
    color: #f0ba45;
    fill: #f0ba45;
    }
    .icon-15 {
    color: #f89c44;
    fill: #f89c44;
    }
    .icon-26 {
    color: #ef6085;
    fill: #ef6085;
    }

    /* Blog Styles */
    .black-box-text {
    display: inline;
    line-height: 100%;
    padding-left: 0;
    padding-right: 0;
    color: #fff;
    background: #191919;
    box-shadow: 20px 0 0 #191919, -20px 0 0 #191919;
    -webkit-box-decoration-break: clone;
    -o-box-decoration-break: clone;
    box-decoration-break: clone;
    }
    .black-box-text p {
    display: block;
    line-height: 100%;
    padding: 16px 0px;
    color: #fff;
    background: #191919;
    box-shadow: 20px 0 0 #191919, -20px 0 0 #191919;
    -webkit-box-decoration-break: clone;
    -o-box-decoration-break: clone;
    box-decoration-break: clone;
    }
    h1.standard-title {
    padding-top: 80px;
    margin: .3em auto;
    font-weight: bold;
    text-transform: uppercase;
    }


    /* Media Queries */
    @media screen and ( min-width: 1201px ) {
        .jo-content {
            padding-left: 20px;
            padding-right: 20px;
        }
        h1.standard-title {
            font-size: 6em;
        }
    }
    @media screen and ( min-width: 801px ) and ( max-width: 1200px ) {
        .jo-content {
            padding-left: 60px;
            padding-right: 60px;
        }
    }
    @media screen and (min-width: 601px) and (max-width: 1200px) {
        h1.standard-title {
            font-size: 5em;
        }
    }
    @media screen and ( min-width: 801px ) {
        h1 {
            font-size: 3rem;
            line-height: 1.05;
        }
        h2 {
            font-size: 2.5rem;
            line-height: 1.25;
        }
        h3 {
            font-size: 1.75rem;
            line-height: 1.25;
        }
        h4 {
            line-height: 1.22222222;
        } 
    }
    @media screen and ( max-width: 800px ) {
        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 100vh;
            height: auto;
        }
        .full-height-section {
            height: auto;
            min-height: auto;
        }
    }
    @media screen and ( min-width: 601px ) and ( max-width: 800px ) {
        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        h1 {
            font-size: 2.7rem;
            line-height: 1.125;
        }
        h2 {
            font-size: 2.4rem;
            line-height: 1.25;
        }
        h3 {
            font-size: 1.8rem;
            line-height: 1.25;
        }
        h4 {
            line-height: 1.22222222;
        }
        .jo-content {
            padding-left: 40px;
            padding-right: 40px;
        }
    }
    @media screen and ( max-width: 600px ) {
        h1 {
            font-size: 2.5rem;
        }
        h1.standard-title {
            font-size: 2.8em;
        }
        h2 {
            font-size: 2rem;
            line-height: 1.25;
        }
        h3 {
            font-size: 1.5rem;
            line-height: 1.25;
        }
        h4 {
            line-height: 1.22222222;
        }
    }

    /* React Transitions */
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 600ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 600ms ease-in;
    }
    .loading-enter {
        opacity: 0;
    }
    .loading-enter-active {
        opacity: 1;
        transition: opacity 5000ms ease-in;
    }
    .loading-exit {
        opacity: 1;
    }
    .loading-exit-active {
        opacity: 0;
        transition: opacity 5000ms ease-in;
    }

  /* Keyframes, color transition animations, etc */

    @-webkit-keyframes bg-rainbow {
        0% {background-color: #ffffff;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #ffffff;}
    }
    @-ms-keyframes bg-rainbow {
        0% {background-color: #ffffff;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #ffffff;}
    }
    @-o-keyframes bg-rainbow {
        0% {background-color: #ffffff;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #ffffff;}
    }
    @keyframes bg-rainbow {
        0% {background-color: #ffffff;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #ffffff;}
    }
    @-webkit-keyframes bg-rainbow-black {
        0% {background-color: #191919;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #191919;}
    }
    @-ms-keyframes bg-rainbow-black {
        0% {background-color: #191919;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #191919;}
    }
    @-o-keyframes bg-rainbow-black {
        0% {background-color: #191919;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #191919;}
    }
    @keyframes bg-rainbow-black {
        0% {background-color: #191919;}
        15% {background-color: #f0ba45;}
        40% {background-color: #f89c44;}
        65% {background-color: #ef6085;}
        90% {background-color: #cd5fa1;}
        100% {background-color: #191919;}
    }

    @-webkit-keyframes p-rainbow {
        0% {color: #ffffff;stroke:#ffffff;}
        15% {color: #f0ba45;stroke:#f0ba45;}
        40% {color: #f89c44;stroke:#f89c44;}
        65% {color: #ef6085;stroke:#ef6085;}
        90% {color: #cd5fa1;stroke:#cd5fa1;}
        100% {color: #ffffff;stroke:#ffffff;}
    }
    @-ms-keyframes p-rainbow {
        0% {color: #ffffff;stroke:#ffffff;}
        15% {color: #f0ba45;stroke:#f0ba45;}
        40% {color: #f89c44;stroke:#f89c44;}
        65% {color: #ef6085;stroke:#ef6085;}
        90% {color: #cd5fa1;stroke:#cd5fa1;}
        100% {color: #ffffff;stroke:#ffffff;}
    }
    @-o-keyframes p-rainbow {
        0% {color: #ffffff;stroke:#ffffff;}
        15% {color: #f0ba45;stroke:#f0ba45;}
        40% {color: #f89c44;stroke:#f89c44;}
        65% {color: #ef6085;stroke:#ef6085;}
        90% {color: #cd5fa1;stroke:#cd5fa1;}
        100% {color: #ffffff;stroke:#ffffff;}
    }
    @keyframes p-rainbow {
        0% {color: #ffffff;stroke:#ffffff;}
        15% {color: #f0ba45;stroke:#f0ba45;}
        40% {color: #f89c44;stroke:#f89c44;}
        65% {color: #ef6085;stroke:#ef6085;}
        90% {color: #cd5fa1;stroke:#cd5fa1;}
        100% {color: #ffffff;stroke:#ffffff;}
    }

    /* Loading Rainbow Hover */
    @-webkit-keyframes loading-shape-rainbow {
        0% {fill:#fff;}
        10% {fill:#191919;}
        20% {fill: #fff}
        30% {fill:rgb(239, 96, 133);}
        40% {fill: #fff;}
        50% {fill:rgb(26, 167, 167);}
        60% {fill: #fff;}
        70% {fill:rgb(255, 168, 68);}
        80% {fill: #fff;}
        90% {fill:rgb(255, 98, 132);}
        100% {fill:#fff;}
    }
    @-ms-keyframes loading-shape-rainbow {
        0% {fill:#fff;}
        10% {fill:#191919;}
        20% {fill: #fff}
        30% {fill:rgb(239, 96, 133);}
        40% {fill: #fff;}
        50% {fill:rgb(26, 167, 167);}
        60% {fill: #fff;}
        70% {fill:rgb(255, 168, 68);}
        80% {fill: #fff;}
        90% {fill:rgb(255, 98, 132);}
        100% {fill:#fff;}
    }
    @-o-keyframes loading-shape-rainbow {
        0% {fill:#fff;}
        10% {fill:#191919;}
        20% {fill: #fff}
        30% {fill:rgb(239, 96, 133);}
        40% {fill: #fff;}
        50% {fill:rgb(26, 167, 167);}
        60% {fill: #fff;}
        70% {fill:rgb(255, 168, 68);}
        80% {fill: #fff;}
        90% {fill:rgb(255, 98, 132);}
        100% {fill:#fff;}
    }
    @keyframes loading-shape-rainbow {
        0% {fill:#fff;}
        10% {fill:#191919;}
        20% {fill: #fff}
        30% {fill:rgb(239, 96, 133);}
        40% {fill: #fff;}
        50% {fill:rgb(26, 167, 167);}
        60% {fill: #fff;}
        70% {fill:rgb(255, 168, 68);}
        80% {fill: #fff;}
        90% {fill:rgb(255, 98, 132);}
        100% {fill:#fff;}
    }

    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }

`

export default GlobalStyles