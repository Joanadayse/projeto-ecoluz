import React from "react";
import styled from "styled-components";
import logo from "../assests/logo.png"



const Cabecalho= styled.header`
background-color: #00473E; /* Verde escuro */
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;


    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const HeaderLogo= styled.div`
 display: flex;
  align-items: center;

img{
height: 80px;
  margin-right: 10px;
}
`

const Nav = styled.nav`

a{
     margin-left: 20px;
  text-decoration: none;
  color: #eaf0ef;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}


    @media (max-width: 768px) {
      display: none; /* Oculta o menu em telas menores */
    }

`

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
