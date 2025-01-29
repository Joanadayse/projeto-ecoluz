import React, { useState } from 'react';
import HeaderPaginas from '../componets/HeaderPaginas';
import logosimulador from "../assests/grafico.png";
import styled from 'styled-components';

const Simulador = () => {
  const [tipo, setTipo] = useState("");
  const [consumo, setConsumo] = useState("");
  const [horas, setHoras] = useState("");
  const [dias, setDias] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularConsumo = () => {
    const consumoKWh = (consumo * horas * dias) / 1000;
    const tarifa = 0.95; // Tarifa média (R$/kWh)
    const custo = consumoKWh * tarifa;

    setResultado({
      consumoKWh: consumoKWh.toFixed(2),
      custo: custo.toFixed(2),
    });
  };

  const limparCampos = () => {
    setTipo("");
    setConsumo("");
    setHoras("");
    setDias("");
    setResultado(null);
  };

  return (
    <>
      <HeaderPaginas
        logo={logosimulador}
        title="SIMULADOR"
        links={[
          { href: "/concientizacao", label: "CONCIENTIZAÇÃO" },
          { href: "/emais", label: "E+ RECICLAGEM" },
          { href: "/tradutor", label: "TRADUTOR DE ETIQUETAS" },
          { href: "*", label: "INICIO" },
        ]}


      />

      <DivForm>
        <Header>
          <span>Simule o consumo de energia </span>
          <span> dos seus eletrodomésticos</span></Header>
        <Form>
          <Input
            type="text"
            placeholder="Tipo de Eletrodoméstico"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Consumo (Watts)"
            value={consumo}
            onChange={(e) => setConsumo(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Horas de uso por dia"
            value={horas}
            onChange={(e) => setHoras(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Dias de uso por mês"
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          />
          <ButtonContainer>
            <Button onClick={calcularConsumo}>Calcular</Button>
            <Button secondary onClick={limparCampos}>
              Limpar
            </Button>
          </ButtonContainer>
        </Form>
        {resultado && (
          <Resultado>
            <p>
              Consumo total: <strong>{resultado.consumoKWh} kWh</strong>
            </p>
            <p>
              Custo estimado: <strong>R$ {resultado.custo}</strong>
            </p>
          </Resultado>
        )}
      </DivForm>



    </>
  );
};

export default Simulador;


// Estilizações com styled-components
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   margin-top: 90px;
  
`;

const Header = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;

  display: flex;
  flex-direction: column; /* Cada <span> vira uma linha */
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;

  
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #004d1a;
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: #007b31;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
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

const Resultado = styled.div`
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
