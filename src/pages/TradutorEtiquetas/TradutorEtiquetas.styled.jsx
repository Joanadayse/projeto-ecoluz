import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #002d26;
  color: #eafaf1;
  margin-top: 90px;

`;

export const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Descricao = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  max-width: 600px;
  color: #C7F9CC;
`;

export const BotoesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Botao = styled.button`
  background: ${(props) => (props.ativo ? "#00a878" : "#005c50")};
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: larger;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #00c690;
  }
`;

export const InfoBox = styled.div`
  background: #C7F9CC;
  padding: 30px;
  border-radius: 8px;
  margin-top: 40px;
  max-width: 500px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
`;

