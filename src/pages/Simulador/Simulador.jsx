import React, { useState } from 'react';
import logosimulador from "../../assests/grafico.png";
import HeaderPaginas from '../../componets/HeaderPaginas/HeaderPaginas';
import { Button, ButtonContainer, DivForm, Form, Header, Input, Resultado } from './Simulador.styled';

const Simulador = () => {
  const [tipo, setTipo] = useState("");
  const [consumo, setConsumo] = useState("");
  const [horas, setHoras] = useState("");
  const [dias, setDias] = useState("");
  const [tarifa, setTarifa] = useState(0.95); // Tarifa média nacional (R$/kWh)
  const [resultado, setResultado] = useState(null);

  const calcularConsumo = () => {
    const consumoKWh = (consumo * horas * dias) / 1000;
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
          { href: "/conscientizacao", label: "CONCIENTIZAÇÃO" },
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

