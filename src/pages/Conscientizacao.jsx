import styled from "styled-components";
import { FaLightbulb, FaTachometerAlt, FaPlug, FaWater } from "react-icons/fa";
import HeaderPaginas from "../componets/HeaderPaginas";
import logoConcientizacao from "../assests/lampada.png";
import { useNavigate } from "react-router-dom";


const dicas = [
    { icone: <FaLightbulb />, texto: "Troque lâmpadas incandescentes por LED." },
    { icone: <FaTachometerAlt />, texto: "Desligue aparelhos da tomada quando não estiver usando." },
    { icone: <FaPlug />, texto: "Use tomadas inteligentes para monitorar o consumo." },
    { icone: <FaWater />, texto: "Evite banhos longos para reduzir o gasto com aquecimento." },
];

const  Conscientizacao=()=> {
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
                    { href: "*", label: "INICIO" },
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



const Container = styled.div`
  text-align: center;
  padding: 20px;
  color: #eafaf1;
  background-color: #002d26;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: white;
`;

const Descricao = styled.p`
  margin: 20px;
`;

const DicasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const Dica = styled.div`
  display: flex;
  align-items: center;
  background: #014d40;
  padding: 10px;
  border-radius: 8px;
  width: 80%;
`;

const Icone = styled.div`
  font-size: 24px;
  margin-right: 10px;
  color: #ffd700;
`;

const Texto = styled.p`
  font-size: 1rem;
`;

const Botao = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background: #008c4a;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: #00b060;
  }
`;

// const CalculadoraContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   background: #014d40;
//   border-radius: 10px;
//   width: 80%;
//   margin-left: auto;
//   margin-right: auto;
//   color: white;
// `;