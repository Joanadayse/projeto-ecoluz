import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoConcientizacao from "../../assests/lampada.png";
import { FaLightbulb, FaPlug, FaTachometerAlt, FaWater } from 'react-icons/fa';
import { Botao, Container, Descricao, Dica, DicasContainer, Icone, Texto, Titulo } from './Concientizacao.styled';
import HeaderPaginas from '../../componets/HeaderPaginas/HeaderPaginas.jsx';



const dicas = [
    { icone: <FaLightbulb />, texto: "Troque lâmpadas incandescentes por LED." },
    { icone: <FaTachometerAlt />, texto: "Desligue aparelhos da tomada quando não estiver usando." },
    { icone: <FaPlug />, texto: "Use tomadas inteligentes para monitorar o consumo." },
    { icone: <FaWater />, texto: "Evite banhos longos para reduzir o gasto com aquecimento." },
];

const Conscientizacao = () => {
    const navigate = useNavigate();

    const irParaOutraPagina = () => {
        navigate("/simulador");
    };
return (
    <>
        <HeaderPaginas
            logo={logoConcientizacao}
            title="Concientização"
            links={[
                { href: "/emais", label: "E+ RECICLAGEM" },
                { href: "/simulador", label: "SIMULADOR" },
                { href: "/tradutor", label: "TRADUTOR DE ETIQUETAS" },
                { href: "/", label: "INICIO" },
            ]}


        />
        <Container>
            <Titulo>Conscientização sobre Economia de Energia</Titulo>
            <Descricao>Dicas simples para reduzir seu consumo e economizar na conta de luz.</Descricao>

            <DicasContainer>
                {dicas.map((dica, index) => (
                    <Dica key={index}>
                        <Icone>{dica.icone}</Icone>
                        <Texto>{dica.texto}</Texto>
                    </Dica>
                ))}
            </DicasContainer>

            <Botao onClick={irParaOutraPagina} >
                Simule o seu consumo de Energia
            </Botao>


        </Container>

    </>
);
};



export default Conscientizacao;



