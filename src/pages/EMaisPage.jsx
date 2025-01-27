import React from "react";
import styled from "styled-components";
import logoemais from "../assests/emais.png"



 const Container = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #002d26;
  color: #eafaf1;
  padding: 20px;
  
  
`;

 const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #00493f;

  
`;

const DivHeader= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const ContainerLogo= styled.div`
/* display: flex;
align-items: center;
text-align: center; */

 display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espaço entre logo e título */
 

`

 const Logo = styled.img`
  height: 90px;
  /* margin-bottom: 80px; */
`;

 const Title = styled.h1`
  font-size: 1.8rem;
  /* margin-bottom: 10px; */
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

 const Section = styled.section`
  margin: 50px 0;
  /* margin-bottom: 40px; */
`;

 const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #4be381;
`;

 const Steps = styled.ol`
  list-style: decimal;
  padding-left: 20px;
`;

 const Step = styled.li`
  margin-bottom: 10px;
`;

 const Materials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* justify-content: center; */
`;

 const Material = styled.div`
  background-color: #00493f;
  padding: 15px;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  h3 {
    color: #4be381;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
  }
`;

const Note = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #8ae1b9;
`;

 const List = styled.ul`
  padding-left: 20px;

  li {
    margin-bottom: 10px;
  }
`;

const DivButton=styled.div`
  text-align: center;
  margin-top: 30px;
  padding: 20px 0;
 
`;

const ActionButton = styled.button`
  background-color: #00a87e;
  color: #fff;
  border: none;
  font-size: larger;
  padding: 20px 70px;
  margin:20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #007a5a;
  }
`;

const EMaisPage = () => {
  return (
    <Container>
      <Header>
       
          <ContainerLogo>
            <Logo src={logoemais} alt="Logo E+" />
            <Title>E+ RECICLAGEM</Title>
          </ContainerLogo>

          
       
        <Title>Transforme recicláveis em economia na sua conta de energia</Title>
        <Nav>
          <NavLink href="#">Simulador</NavLink>
          <NavLink href="#">Tradutor de Etiquetas</NavLink>
          <NavLink href="#">Voltar</NavLink>
        </Nav>
      </Header>

      <Section>
        <Subtitle>PASSO A PASSO:</Subtitle>
        <Steps>
          <Step>Você deve estar com sua fatura de energia em mãos e levar ao posto de coleta mais próximo com os resíduos limpos e separados;</Step>
          <Step>No posto, o atendente irá pesar cada resíduo separadamente, gerando um bônus a ser creditado na fatura de energia;</Step>
          <Step>Ao final, você receberá um comprovante da transação para conferência junto à fatura no mês seguinte.</Step>
        </Steps>
      </Section>

      <Section>
        <Subtitle>Materiais recicláveis recebidos no posto de coleta:</Subtitle>
        <Materials>
          <Material>
            <h3>PAPEL</h3>
            <p>Livros, revistas, papelão, encartes e Tetra Pak.</p>
          </Material>
          <Material>
            <h3>PLÁSTICO</h3>
            <p>PET, plástico filme, PVC.</p>
          </Material>
          <Material>
            <h3>VIDRO</h3>
            <p>Garrafas e tampas plásticas.</p>
          </Material>
          <Material>
            <h3>METAL</h3>
            <p>Aço inox, alumínio, ferro.</p>
          </Material>
        </Materials>
        <Note>* Recebemos também óleo de cozinha usado.</Note>
      </Section>

      <Section>
        <Subtitle>Quais materiais NÃO recebemos:</Subtitle>
        <List>
          <li>Cabos e fios, CDs, fitas K7 e de vídeo, cobre...</li>
          <li>Embalagens plásticas metalizadas...</li>
          <li>Restos de alimentos, tecidos, e outros...</li>
        </List>
      </Section>

      <DivButton>
        <ActionButton>Localize um ponto de coleta</ActionButton>
        <ActionButton>Dicas de reciclagem</ActionButton>
      </DivButton>
    </Container>
  );
};

export default EMaisPage;
