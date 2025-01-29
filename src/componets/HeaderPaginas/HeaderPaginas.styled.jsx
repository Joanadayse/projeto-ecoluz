import styled from "styled-components";

export const HeaderContainer = styled.header`
 text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #00493f;
  background-color: #00473E;
   box-shadow: 0px 4px 10px #C7F9CC;
`;

export const ContainerLogo = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espaço entre logo e título */
`;

export const Logo = styled.img`
   height: 90px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: white;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4be381;
`;

export const Nav = styled.nav`
 margin-top: 15px;
   display: flex;
  justify-content: center;
  gap: 20px; /* Espaço entre os links */
`;

export const NavLink = styled.a`
 color: #C7F9CC;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;