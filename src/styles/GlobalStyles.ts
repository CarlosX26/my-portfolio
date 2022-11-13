import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    border: none;
    outline:none;
    text-decoration:none;
    resize:none;
    font-family: 'Raleway', sans-serif;
}

:root{
    --color-brand-1:#9893ad;
    --color-brand-2:#2b3f5b;
    --color-brand-3:#13263a;

    --color-gray-1:#f9f9f9;
    --color-gray-2:#e5e3ee;
    --color-gray-3:#212529;

    --color-heading:#f9f9f9;
    --color-text:#f9f9f9;

    --heading-1:2em;
    --heading-2: 1.5em;
    --heading-3: 1.25em;

    --text-1:1em;
    --text-2:0.75em;
}

html{
    scroll-behavior: smooth;
    overflow-x: hidden;
}
html::-webkit-scrollbar{
    width: 8px;
    height: 8px;
}
html::-webkit-scrollbar-thumb{
    background:var(--color-gray-2);
    border-radius: 50px;
    min-height: 128px;
}
html::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-1);
}
html::-webkit-scrollbar-thumb:active {
    background:var(--color-gray-1);
}
html::-webkit-scrollbar-track {
    background: var(--color-gray-3);
    
    
}

img{
    max-width:100%;
}

`;

export default GlobalStyles;
