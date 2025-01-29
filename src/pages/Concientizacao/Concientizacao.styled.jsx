import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: #eafaf1;
  /* background-color: red; */
  
`;

export const Titulo = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const Descricao = styled.p`
  margin: 20px;
`;

export const DicasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

 export const Dica = styled.div`
  display: flex;
  align-items: center;
  background: #014d40;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
`;

export const Icone = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: #ffd700;
`;

export const Texto = styled.p`
  font-size: 1rem;
`;

export const Botao = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background: #008c4a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: #00b060;
  }
`;