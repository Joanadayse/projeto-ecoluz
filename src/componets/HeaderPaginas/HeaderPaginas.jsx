import React from "react";
import { ContainerLogo, HeaderContainer, Logo, Nav, NavLink, SubTitle, Title } from "./HeaderPaginas.styled";




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
