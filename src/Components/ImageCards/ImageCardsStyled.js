import styled from "styled-components";

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Work+Sans:400,600');
document.head.appendChild(link);

export const BottomSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
    background-color: aliceblue;
`

export const BottomImage = styled.div`
    width:500px;
    margin:auto;
    padding: 75px;
`

export const TopText = styled.div`
    width: 612px;
    font-size: 30px;
    color: black;
    background-color: white;
    padding-bottom: 5px;
    text-align: center;

`

export const BottomText = styled.div`
    width: 612px;
    font-size: 20px;
    color: grey;
    background-color: white;
    padding-bottom: 20px;
    text-align: center;
    font-family: 'Work Sans', sans-serif;
	font-weight: 600;
    color: darkred;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
`