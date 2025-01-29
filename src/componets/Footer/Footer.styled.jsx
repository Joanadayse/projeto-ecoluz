import styled from "styled-components";

export const Container = styled.footer`

  background-color: #00473E; /* Verde escuro */
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: auto; /* Empurra o footer para o final */
  position: relative;
  bottom: 0;
  width: 100%;

   @media (max-width: 768px) {
    font-size: 0.8rem; /* Texto menor em telas pequenas */
  }


`