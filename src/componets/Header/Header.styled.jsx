import styled from "styled-components"


export const Cabecalho = styled.header`
background-color: #00473E; /* Verde escuro */
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
   box-shadow: 0px 4px 10px #C7F9CC;


    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const HeaderLogo = styled.div`
 display: flex;
  align-items: center;

img{
height: 80px;
  margin-right: 10px;
}
`

export const Nav = styled.nav`

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