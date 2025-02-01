import styled from "styled-components";

export const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #00493f;
  background-color: #00473E;
  box-shadow: 0px 4px 10px #C7F9CC;

  @media (max-width: 768px) {
    padding: 15px 0;
    
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column; /* Logo e título em coluna */
    gap: 5px;
  }
`;

export const Logo = styled.img`
  height: 90px;

  @media (max-width: 768px) {
    height: 60px; /* Reduz o tamanho da logo em telas menores */
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Título menor */
  }

  @media (max-width: 480px) {
    font-size: 1.3rem; /* Ainda menor em celulares */
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4be381;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Navegação em coluna em telas menores */
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: #C7F9CC;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
