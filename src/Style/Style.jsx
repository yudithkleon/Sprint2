import styled from "styled-components";


const StyleH1 = styled.h1`
font-size: 20px;
color:blanchedalmond;
text-align: center;
`;

const Style = styled.nav`
background-color: black;
display: flex;
justify-self: flex-end;
justify-content: justify;
font-family: 'fantasy';
letter-spacing: 1px;
margin: 1em 0 0 0;
text-align: center;
`;

const StyleP = styled.p`
font-size: 16px;
color:blanchedalmond;
`;

const StyleDiv = styled.div`
background-color: black;
align-items: center;
justify-content: center;
font-family: 'fantasy';
`;


const StyleImg = styled.img`
align-items: left;
justify-content: left;
margin: 5px;
`;

const StyleA = styled.div`
align-items: left;
justify-content: left;
margin: 5px;
`
const StyleLista = styled.ul`
display: flex;
justify-self: flex-end;
justify-content: right;
`;

const StyleIframe = styled.iframe`
display: flex;
justify-content: center;
text-align: center;
margin: 20px;
padding: 20px;
`;

export const Iframe = StyleIframe
export const Nav = Style
export const Ul =StyleLista
export const P = StyleP
export const Div = StyleDiv
export const H1= StyleH1
export const DivA= StyleA
export const Img= StyleImg