import styled from "styled-components";

//code to get custom google font
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Work+Sans:400,600');
document.head.appendChild(link);

export const NavBackground = styled.header`
    background-color: white;
    padding-top: 15px;
    padding-bottom: 20px;
    &::after {
    content: '';
    display: table;
    clear: both;
    }
`;

export const NavContainer = styled.div`
	margin: 0, auto;
    width: 95%;
    font-family: 'Work Sans', sans-serif;
	font-weight: 600;
    .logo {
        float: left;
        padding: 10px;
        padding-left: 3%;
        max-width: 300px;
        max-height: 55px;
    }

    nav {
        float: right;
    }

    nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    nav li {
    display: inline-block;
    margin-left: 60px;

    }

    nav a {
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    }

    nav a:hover {
        color:#b71234;
    }
`;

export const MenuButton = styled.li`
    padding-top: 25px;
`;

export const Login = styled.li`
    border-color: black;
    border-width: 2px;
    border-style: solid;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 5px;
    padding-bottom: 5px;
 `;
