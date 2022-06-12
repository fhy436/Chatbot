import {NavContainer, NavBackground, Login, MenuButton} from "./NavBarStyled";
import image from "./turnerscars_logo.png";


const NavBar = () => {

    return (
    <>
    <NavBackground>
        <NavContainer> 
            <img src={image} alt="logo" className="logo"/>
            <nav>
                <ul>
                    <MenuButton><a href="#"> Find a car</a></MenuButton>
                    <MenuButton><a href="#">How to Buy</a></MenuButton>
                    <MenuButton><a href="#">Sell your Car</a></MenuButton>
                    <MenuButton><a href="#"> Insurance</a></MenuButton>
                    <Login><a href="#">Login</a></Login>
                </ul>
            </nav>
        </NavContainer>
    </NavBackground>

    </>

    );
};

export default NavBar;
