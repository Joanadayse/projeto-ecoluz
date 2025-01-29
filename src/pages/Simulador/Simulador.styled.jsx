import styled from "styled-components";


export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   margin-top: 90px;

`;

export const Header = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;

  display: flex;
  flex-direction: column; /* Cada <span> vira uma linha */
  text-align: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;

  
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #004d1a;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #007b31;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: ${(props) => (props.secondary ? "#004d1a" : "white")};
  background-color: ${(props) => (props.secondary ? "#d9fce0" : "#004d1a")};
  border: 2px solid #004d1a;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#b9e4c4" : "#007b31")};
  }
`;

export const Resultado = styled.div`
  margin-top: 20px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.2rem;
    color: #004d1a;
    margin: 10px 0;
  }

  strong {
    font-weight: bold;
  }
`;
