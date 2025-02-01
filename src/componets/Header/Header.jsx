import React from "react";
import logo from "../../assests/logo.png";
import { Cabecalho, HeaderLogo, Nav } from "./Header.styled";



const Header = () => {
    return (
        <Cabecalho>
            <HeaderLogo >
                <img src={logo} alt="Logo" />
                <h1 >EcoLuz</h1>
            </HeaderLogo>
            <Nav >
                <a href="#" >
                   Contato  (98) 2055-0116
                </a>
                
            </Nav>
        </Cabecalho>
    );
};

export default Header;
