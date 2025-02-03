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
  const [sugestao, setSugestao] = useState(""); // Nova variável para sugestões

  const calcularConsumo = () => {
    const consumoKWh = (consumo * horas * dias) / 1000;
    const custo = consumoKWh * tarifa;

    let sugestaoTexto = "";

     

    // Definindo um limite alto de consumo (ajuste conforme necessário)
    if (consumoKWh > 150) {
      sugestaoTexto = `Seu consumo está alto!  Algumas sugestões:\n
       Considere reduzir o uso ou trocar por um modelo mais eficiente\n
      - Reduza o tempo de uso em  ${Math.min(horas, 1)}h por dia e economize
      R$${(tarifa * (consumo / 1000) * Math.min(horas, 1) * dias).toFixed(2)}por mês.\n
      - Evite deixar o aparelho em standby para reduzir o consumo.`; 
    }

    setResultado({
      consumoKWh: consumoKWh.toFixed(2),
      custo: custo.toFixed(2),
    });
    setSugestao(sugestaoTexto);
  };

  const limparCampos = () => {
    setTipo("");
    setConsumo("");
    setHoras("");
    setDias("");
    setResultado(null);
    setSugestao("");
  };

  return (
    <>
      <HeaderPaginas
        logo={logosimulador}
        title="SIMULADOR"
        links={[
          { href: "conscientizacao", label: "CONCIENTIZAÇÃO" },
          { href: "emais", label: "E+ RECICLAGEM" },
          { href: "tradutor", label: "TRADUTOR DE ETIQUETAS" },
          { href: "", label: "INICIO" },
        ]}


      />

      <DivForm>
        <Header>
          Simule o consumo de energia 
          dos seus eletrodomésticos</Header>

       
        <Form>

          <p style={{ marginBottom: "15px", textAlign: "justify" }}>
            Primeiramente, verifique a potência do aparelho,
            geralmente  indicada <br></br>na
            etiqueta de especificações  ou no manual do fabricante.
          </p>
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
              Consumo total (por mês): <strong>{resultado.consumoKWh} kWh</strong>
            </p>
            <p>
              Custo estimado (por mês): <strong>R$ {resultado.custo}</strong>
            </p>

            {sugestao && (
              <p style={{ color: "red", fontWeight: "bold", whiteSpace: "pre-line" }}>{sugestao}</p>
            )}
          </Resultado>
        )}
      </DivForm>



    </>
  );
};

export default Simulador;

