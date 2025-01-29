import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #C7F9CC;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  /* margin: 10px; */
  padding: 20px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
 
  transition: box-shadow 0.3s ease-in-out; 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px  #C7F9CC; 
  }

 


  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
    margin: 20px;
  }
`;

// Cabeçalho do card (com título e ícone)
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.5rem;
    color: #2f855a;
    text-align: center;
  }
`;

// Corpo do card (descrição)
export const CardBody = styled.div`
  text-align: center;

  p {
    font-size: 1rem;
    color: #4a5568;
  }
`;

// Botão do card
export const CardButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #023323;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2f855a;
  }
`;