import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
body{
    background:#1b1b1b;
    font-family: "inter" , sans-serif;
}
button{
    font-weight:bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding : 1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color: white;
    transition:all 0.5s ease;
    font-family: "inter" , sans-serif;
    &:hover{
        background:#23d997;
        color:white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color:white;
}
h4{
    color:#23d997;
    font-weight:bold;
}
a{
    font-size:1.1.rem;
}
span{
    font-weight:bold;
    color:#23d997;
}
p{
    padding:3rem 0rem;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%;

}
`;

export default GlobalStyle;
