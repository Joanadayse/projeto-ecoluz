import React, { useState } from 'react';
import logoetiqueta from "../../assests/etiqueta.png";
import HeaderPaginas from '../../componets/HeaderPaginas/HeaderPaginas';
import { Button ,Container, ContainerFlex, ContainerImagem, Form, InfoBox, InfoIcon, InfoImage, Input,  Lupa,  Select, Table, Td, Th} from './TradutorEtiquetas.styled';
import Tooltip from '../../componets/Tooltip/Tooltip';
import etiquetaImagem from "../../assests/etiqueta-explicacao.jpg";




const TradutorEtiqueta = () => {
    const [aparelho1, setAparelho1] = useState("");
    const [aparelho2, setAparelho2] = useState("");
    const [etiqueta1, setEtiqueta1] = useState("A");
    const [etiqueta2, setEtiqueta2] = useState("A");
    const [consumo1, setConsumo1] = useState("");
    const [consumo2, setConsumo2] = useState("");
    const [resultado, setResultado] = useState(null);
    const [lupaPos, setLupaPos] = useState({ x: 0, y: 0 });
    const [showLupa, setShowLupa] = useState(false);

    const eficiencia = {
        A: 0.8,
        B: 1.0,
        C: 1.2,
        D: 1.5,
        E: 1.8
    };

    // const comparar = () => {
    //     if (!aparelho1 || !aparelho2 || !consumo1 || !consumo2) {
    //         alert("Preencha todos os campos!");
    //         return;
    //     }

    //     const consumoFinal1 = consumo1 * eficiencia[etiqueta1];
    //     const consumoFinal2 = consumo2 * eficiencia[etiqueta2];

    //     let sugestao = null;
    //     if (etiqueta1 !== "A" || etiqueta2 !== "A") {
    //         const melhorOpcao = etiqueta1 !== "A" ? aparelho1 : aparelho2;
    //         const economia = Math.abs(consumoFinal1 - consumoFinal2) * 12; // Economia anual
    //         sugestao = `Recomenda-se um modelo mais eficiente para ${melhorOpcao}, podendo economizar cerca de ${economia.toFixed(2)} kWh por ano!`;
    //     }

    //     setResultado({
    //         consumoFinal1,
    //         consumoFinal2,
    //         sugestao
    //     });

        
    // };

    const tarifaEnergia = 0.90; // Defina a tarifa de energia em R$/kWh

    const comparar = () => {
        if (!aparelho1 || !aparelho2 || !consumo1 || !consumo2) {
            alert("Preencha todos os campos!");
            return;
        }

        const consumoFinal1 = consumo1 * eficiencia[etiqueta1];
        const consumoFinal2 = consumo2 * eficiencia[etiqueta2];

        // Convertendo consumo para reais
        const custoFinal1 = consumoFinal1 * tarifaEnergia;
        const custoFinal2 = consumoFinal2 * tarifaEnergia;

        let sugestao = null;
        if (etiqueta1 !== "A" || etiqueta2 !== "A") {
            const melhorOpcao = etiqueta1 !== "A" ? aparelho1 : aparelho2;
            const economia = Math.abs(custoFinal1 - custoFinal2) * 12; // Economia anual em reais
            sugestao = `Recomenda-se um modelo mais eficiente para ${melhorOpcao}, podendo economizar cerca de R$ ${economia.toFixed(2)} por ano!`;
        }

        setResultado({
            custoFinal1,
            custoFinal2,
            sugestao
        });
    };

    const handleImageClick = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const xPercent = ((e.clientX - left) / width) * 100;
        const yPercent = ((e.clientY - top) / height) * 100;

        setLupaPos({ x: xPercent, y: yPercent });
        setShowLupa(true);

        setTimeout(() => setShowLupa(false), 2000); // Lupa desaparece após 2s
    };

return (
    <>
        <HeaderPaginas
            logo={logoetiqueta}
            title="TRADUTOR DE ETIQUETA"
            links={[
              { href: "/conscientizacao", label: "CONCIENTIZAÇÃO" },
                { href: "/emais", label: "E+ RECICLAGEM" },
                { href: "/simulador", label: "SIMULADOR" },
                { href: "*", label: "INICIO" },
            ]}


        />
        <Container>
            
           <ContainerFlex>
                <InfoBox>
                    <h2>📢 Como entender a Etiqueta de Eficiência?</h2>
                    <p>
                        A etiqueta classifica os aparelhos de acordo com o seu consumo de energia, indo de **A (mais eficiente)** a **D (menos eficiente)**.
                        O nível colorido indica a faixa de consumo, mas a **letra real do seu aparelho está ao lado, destacada**.
                    </p>
                    <p>🔍 **Onde encontrar?** A etiqueta geralmente está visível no eletrodoméstico ou no manual.</p>
                    <p>⚡ **Quanto menor o consumo (kWh), menor o impacto na sua conta de energia!**</p>
                    <ContainerImagem onClick={handleImageClick}>
                        <InfoImage src={etiquetaImagem} alt="Etiqueta de Eficiência Energética" />
                        <Lupa
                            show={showLupa}
                            style={{
                                top: `${lupaPos.y}%`,
                                left: `${lupaPos.x}%`,
                                backgroundPosition: `${lupaPos.x}% ${lupaPos.y}%`
                            }}
                        />
                    </ContainerImagem>
                </InfoBox>

                

                <Form>
                    <h1>Comparação de Eletrodomésticos</h1>
                    {/* Aparelho 1 */}
                    <div className='aparelho1'>
                        <Input
                            type="text"
                            placeholder="Nome do 1º Eletrodoméstico"
                            value={aparelho1}
                            onChange={(e) => setAparelho1(e.target.value)}
                        />
                        <Select value={etiqueta1} onChange={(e) => setEtiqueta1(e.target.value)}>
                            <option value="A">A - Mais eficiente</option>
                            <option value="B">B - Eficiente</option>
                            <option value="C">C - Médio consumo</option>
                            <option value="D">D - Alto consumo</option>
                            <option value="E">E - Muito alto consumo</option>
                        </Select>
                        <Tooltip text=" A letra ao lado do nível colorido indica a eficiência real do seu aparelho.">
                            <InfoIcon>❓</InfoIcon>
                        </Tooltip>
                        <Input
                            type="number"
                            placeholder="Consumo (kWh)"
                            value={consumo1}
                            onChange={(e) => setConsumo1(e.target.value)}
                        />
                    </div>

                    {/* Aparelho 2 */}
                    <div className='aparelho1'>
                        <Input
                            type="text"
                            placeholder="Nome do 2º Eletrodoméstico"
                            value={aparelho2}
                            onChange={(e) => setAparelho2(e.target.value)}
                        />
                        <Select value={etiqueta2} onChange={(e) => setEtiqueta2(e.target.value)}>
                            <option value="A">A - Mais eficiente</option>
                            <option value="B">B - Eficiente</option>
                            <option value="C">C - Médio consumo</option>
                            <option value="D">D - Alto consumo</option>
                            <option value="E">E - Muito alto consumo</option>
                        </Select>
                        <Tooltip text="Informe o consumo médio em kWh.">
                            <InfoIcon>❓</InfoIcon>
                        </Tooltip>
                        <Input
                            type="number"
                            placeholder="Consumo (kWh)"
                            value={consumo2}
                            onChange={(e) => setConsumo2(e.target.value)}
                        />
                    </div>

                    <Button onClick={comparar}>Comparar</Button>


                    {resultado && (
                        <div className='resultado'>
                            
                            <Table>
                                <thead>
                                    <tr>
                                        <Th>Eletrodoméstico</Th>
                                        <Th>
                                            Consumo Mensal (kWh) 
                                        </Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <Td>{aparelho1}</Td>
                                        <Td>R$ {resultado.custoFinal1.toFixed(2)}</Td>
                                    </tr>
                                    <tr>
                                        <Td>{aparelho2}</Td>
                                        <Td>R$ {resultado.custoFinal2.toFixed(2)}</Td>
                                    </tr>
                                </tbody>
                            </Table>

                            {resultado.sugestao && (
                                <p style={{ marginTop: "20px", color: "#00a87e", fontWeight: "bold" }}>
                                    {resultado.sugestao}
                                </p>
                            )}
                        </div>
                    )}
                </Form>

               
            </ContainerFlex>
        </Container>
    </>
);
};

export default TradutorEtiqueta;

