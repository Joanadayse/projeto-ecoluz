import styled from "styled-components";
import etiquetaImagem from "../../assests/etiqueta-explicacao.jpg"

export const Container = styled.div`
  padding: 50px;
  max-width: 1200px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

/* Flexbox para organizar InfoBox e Form lado a lado */
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Ajusta para colunas em telas menores */
    align-items: center;
  }
`;


export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #00493f;
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #00a87e;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #007a5a;
  }
`;
/* Caixa com explicação da etiqueta */
export const InfoBox = styled.div`
 
  color: #eafaf1;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  max-width: 50%;

  p{
 line-height: 1.5
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ContainerImagem = styled.div`
  position: relative;
  width: 300px;
  height: auto;
  cursor: crosshair;
  margin: 20px auto;
  border-radius: 5px;
`;

export const InfoImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 5px;
`;

/* Estilo da Lupa */
export const Lupa = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: url(${etiquetaImagem});
  background-size: 300% 300%;
  border: 2px solid #fff;
  border-radius: 50%;
  pointer-events: none; /* Evita interferência no clique */
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show ? "block" : "none")}; /* Controla a visibilidade */
`;


/* Estilo do formulário */
export const Form = styled.div`
  background-color: #f4f4f4;
  margin: 40px;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  max-width: 45%;
  text-align: center;
  

  .aparelho1{
    margin: 10px;
  }

  .resultado{
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
`;

export const InfoIcon = styled.span`
  margin-left: 5px;
  font-size: 1rem;
  cursor: pointer;
`;