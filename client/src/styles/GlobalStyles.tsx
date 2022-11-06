import { createGlobalStyle } from 'styled-components';
import css from 'styled-jsx/css';

interface OuterWrapperProps {
  dark: boolean;
}

export const GlobalStyles = createGlobalStyle<OuterWrapperProps>`

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

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
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

@font-face {
    font-family: 'montserrat';
    src: url('https://fonts.google.com/specimen/Montserrat');
    font-weight: 300;
}
:root{
    box-sizing: border-box;

    ${(props) =>
      props.dark &&
      css`
        --bg: #18181b;
        --font: #ffe4e6;
        --col1: #2b2b50;
        --col2: #27272a;
        --blue: #312e81;
        --peach: #fb7185;
      `};

      ${(props) =>
        props.dark ||
        css`
          --bg: #fda4af;
          --font: #18181b;
          --col1: #fecdd3;
          --col2: #ffe4e6;
          --blue: #312e81;
          --peach: #fb7185;
        `};
}

*, *:before, *:after{
    box-sizing: inherit;
}

body{
    /* background-color: var(--pall1); */
    font-family: 'Courier New', Courier, monospace;
    /* font-family: Georgia, 'Times New Roman', Times, serif; */
    margin: 0;
    line-height: 1;

}

button{
    font-family: 'Courier New', Courier, monospace;
}

`;
