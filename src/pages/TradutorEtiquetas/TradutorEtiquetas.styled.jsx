import styled from "styled-components";
import etiquetaImagem from "../../assests/etiqueta-explicacao.jpg"

export const Container = styled.div`

    display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  padding: 50px;
`;

export const DivContainer = styled.div`


   width: 100%;
  max-width: 100%;
`;

export const Header = styled.header`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Section = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  color: white;
  line-height: 1.8;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;

  p, ul, li {
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
`;



export const SubTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 10px auto;
  border-radius: 8px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Th = styled.th`
  background-color: #00493f;
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
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
  margin: 20px;

  &:hover {
    background: #00b060;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
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

export const Lupa = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-image: url(${etiquetaImagem});
  background-size: 300% 300%;
  border: 2px solid #fff;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
