import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
 text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #00493f;
`;

const ContainerLogo = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espaço entre logo e título */
`;

const Logo = styled.img`
   height: 90px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: white;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4be381;
`;

const Nav = styled.nav`
 margin-top: 15px;
   display: flex;
  justify-content: center;
  gap: 20px; /* Espaço entre os links */
`;

const NavLink = styled.a`
 color: #4be381;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderPaginas = ({ logo, title, subtitle, links }) => {
    return (
        <HeaderContainer>
            <ContainerLogo>
                <Logo src={logo} alt="Logo" />
                <Title>{title}</Title>
            </ContainerLogo>
            <SubTitle>{subtitle}</SubTitle>
            <Nav>
                {links.map((link, index) => (
                    <NavLink key={index} href={link.href}>
                        {link.label}
                    </NavLink>
                ))}
            </Nav>
        </HeaderContainer>
    );
};

export default HeaderPaginas;
