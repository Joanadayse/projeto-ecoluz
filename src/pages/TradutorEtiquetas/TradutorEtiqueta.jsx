import React, { useState } from 'react';
import logoetiqueta from "../../assests/etiqueta.png";
import HeaderPaginas from '../../componets/HeaderPaginas/HeaderPaginas';
import etiquetaImagem from "../../assests/etiqueta-explicacao.jpg"
import { Botao,  Container,  ContainerFlex,  ContainerImagem,  DivContainer, InfoImage, Lupa, Section, Table, Td, Th } from './TradutorEtiquetas.styled';
import { useNavigate } from 'react-router-dom';





const TradutorEtiqueta = () => {
    const [lupaPos, setLupaPos] = useState({ x: 0, y: 0 });
    const [showLupa, setShowLupa] = useState(false);

    const navigate = useNavigate();

    const irParaOutraPagina = () => {
        navigate("/simulador");
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
                { href: "/", label: "INICIO" },
            ]}


        />
        <Container>

            <ContainerFlex>
                <Section>
                    <h2>O que é a etiqueta de eficiência energética?</h2>
                    <p style={{ fontSize: "1rem",  textAlign: "justify", width: "80vh" }}>A etiqueta de eficiência energética é um selo que indica o consumo de energia de um eletrodoméstico. No Brasil, essa etiqueta é regulamentada pelo INMETRO e  é obrigatória para diversos produtos.</p>
                </Section>

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

            </ContainerFlex>
            
            <DivContainer>
                

                <Section>
                    <h2>Como interpretar a etiqueta?</h2>
                    <ul>
                        <li><strong>Classificação de Eficiência:</strong> A etiqueta possui uma escala que vai de **A (mais eficiente)** a **E (menos eficiente)**. Um produto classificado como A consome menos energia em comparação a um produto classificado como E.</li>
                        <li><strong>Consumo de Energia:</strong> A etiqueta informa o consumo anual de energia em quilowatts-hora (kWh). Quanto menor esse número, melhor para o seu bolso e para o meio ambiente.</li>
                        <li><strong>Potência do Aparelho:</strong> A etiqueta pode indicar a potência do aparelho (em Watts), que é importante para entender o consumo em tempo real. Por exemplo, um eletrodoméstico de 1000W consome 1 kWh se utilizado por 1 hora.</li>
                        <li><strong>Informações Adicionais:</strong> A etiqueta também indica qual é o tipo de produto (geladeira, ar-condicionado, máquina de lavar, etc.). <br></br> Algumas etiquetas trazem uma comparação de eficiência com modelos semelhantes.</li>
                    </ul>
                </Section>

                <Section>
                    <h2>Como calcular o gasto de energia ?</h2>
                    <ul>
                        <li>Primeiramente, verifique a potência do aparelho, geralmente indicada na etiqueta de especificações.Vamos usar como exemplo a geladeira;</li>
                        <li>Estime o tempo médio diário que a geladeira fica ligada, multiplique a potência pela quantidade de horas diárias e, depois, pelo número de dias no mês.</li>
                        <li>Por exemplo, vamos considerar uma geladeira de 100 watts (0,1 kW) que fica ligada 24 horas por dia. O cálculo será:</li>
                        <p style={{ marginLeft:"150px" }}><strong>0,1 kW × 24 horas × 30 dias = 72 kWh por mês</strong> </p>
                        <li>Para calcular o custo, <strong>multiplique o consumo mensal (em kWh) pelo valor da tarifa de energia elétrica da sua região</strong>. Assim, você terá uma estimativa do impacto financeiro que o funcionamento da geladeira representa na sua conta de luz.</li>

                        <Botao onClick={irParaOutraPagina} >
                                        Simule o seu consumo de Energia
                                    </Botao>

                        <h3>A idade da geladeira influencia no consumo?</h3>
                        <p>
                            Sim, a idade da geladeira pode influenciar significativamente no consumo de energia.
                            De maneira simplificada, geladeiras mais antigas tendem a ser menos eficientes em termos energéticos devido à tecnologia e aos materiais utilizados na época da sua fabricação.
                            Modelos mais novos, por outro lado, geralmente apresentam avanços em eficiência energética, como motores mais eficientes e isolamento térmico melhorado, o que resulta em um consumo de energia menor.</p>
                    </ul>
                </Section>

                <Section>
                    <h2>Potência média por eletrodoméstico</h2>

                    <Table>
                        <thead>
                            <tr>
                                <Th>Eletrodoméstico</Th>
                                <Th>Potência Média (W)</Th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Td>Geladeira</Td>
                                <Td>100-400 W</Td>
                            </tr>
                            <tr>
                                <Td>TV</Td>
                                <Td>50-200 W</Td>
                            </tr>
                            <tr>
                                <Td>Ar-condicionado</Td>
                                <Td>900-3000 W</Td>
                            </tr>
                            <tr>
                                <Td>Micro-ondas</Td>
                                <Td>1000-1500 W</Td>
                            </tr>
                            <tr>
                                <Td>Máquina de Lavar</Td>
                                <Td>500-1500 W</Td>
                            </tr>
                           
                        </tbody>
                    </Table>
                  
                </Section>
            </DivContainer>

            
        </Container>
    </>
);
};

export default TradutorEtiqueta;

