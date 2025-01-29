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
                    Quem somos
                </a>
                <a href="#">
                    Contato
                </a>
            </Nav>
        </Cabecalho>
    );
};

export default Header;
