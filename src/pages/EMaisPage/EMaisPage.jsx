import React from "react";
import logoemais from "../../assests/emais.png";
import HeaderPaginas from "../../componets/HeaderPaginas/HeaderPaginas";
import { ActionButton, Container, DivButton, List, Material, Materials, Note, Section, Step, Steps, Subtitle } from "./EmaisPage.styled";







const EMaisPage = () => {
  return (
    <>
    <HeaderPaginas
        logo={logoemais}
        title="E+ RECICLAGEM"
        subtitle="Transforme recicláveis em economia na sua conta de energia"
        links={[
          { href: "/conscientizacao", label: "CONCIENTIZAÇÃO" },
          { href: "/simulador", label: "SIMULADOR" },
          { href: "/tradutor", label: "TRADUTOR DE ETIQUETAS" },
          { href: "/", label: "INICIO" },
        ]}
    
    
    />
    
      <Container>


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
        </DivButton>
      </Container>
    
    </>
  );
};

export default EMaisPage;
