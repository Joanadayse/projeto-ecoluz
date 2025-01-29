import React, { useState } from 'react';
import logoetiqueta from "../../assests/etiqueta.png";
import HeaderPaginas from '../../componets/HeaderPaginas/HeaderPaginas';
import { Botao, BotoesContainer, Container, Descricao, InfoBox, Titulo } from './TradutorEtiquetas.styled';



const etiquetas = {
    "Geladeira": "A etiqueta informa o consumo anual de energia, eficiência do compressor e capacidade de armazenamento.",
    "Ar Condicionado": "Mostra a eficiência energética, potência em BTUs e consumo médio por hora de uso.",
    "Máquina de Lavar": "Indica o gasto médio por ciclo, eficiência na lavagem e consumo de água.",
    "TV": "Demonstra o consumo por hora de funcionamento e a tecnologia do painel (LED, OLED, etc.)."
};

const TradutorEtiqueta = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
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
            <Titulo>Entenda as Etiquetas de Eficiência Energética</Titulo>
            <Descricao>Selecione um eletrodoméstico para entender sua etiqueta de eficiência energética.</Descricao>
            <BotoesContainer>
                {Object.keys(etiquetas).map((categoria) => (
                    <Botao
                        key={categoria}
                        onClick={() => setCategoriaSelecionada(categoria)}
                        ativo={categoriaSelecionada === categoria}
                    >
                        {categoria}
                    </Botao>
                ))}
            </BotoesContainer>
            <InfoBox>
                {categoriaSelecionada ? (
                    <p>{etiquetas[categoriaSelecionada]}</p>
                ) : (
                    <p>
                        Selecione uma categoria acima para exibir as informações.</p>
                )}
            </InfoBox>
        </Container>
    </>
);
};

export default TradutorEtiqueta;

