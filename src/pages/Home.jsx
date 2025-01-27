import React from "react";
import Cards from "../componets/Cards";
import Header from "../componets/Header";
import lampada from "../assests/lampada.png";
import emais from "../assests/emais.png";
import grafico from "../assests/grafico.png";
import etiqueta from "../assests/etiqueta.png"


const Home = () => {




    const cards = [
        {
            title: "Conscientização",
            icon: lampada,
            description: "Saiba mais sobre economia de energia e sustentabilidade.",
            buttonText: "Clique aqui",
            route: "/concientizacao"
        },
        {
            title: "E+ Reciclagem",
            icon: emais,
            description: "Troque recicláveis por descontos na conta de energia.",
            buttonText: "Clique aqui",
            route: "/emais"
        },
        {
            title: "Simulador",
            icon: grafico,
            description: "Calcule o consumo de energia dos seus aparelhos.",
            buttonText: "Clique aqui",
            route: "/emais"
        },
        {
            title: "Tradutor de etiquetas",
            icon: etiqueta,
            description: "Entenda as etiquetas de eficiência energética.",
            buttonText: "Clique aqui",
            route: "/emais"
        },
    ];

    return (
       <>
            <Header />
            <div
                style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}
            >
                {cards.map((card, index) => (
                    <Cards
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        description={card.description}
                        buttonText={card.buttonText}
                        route={card.route}
                    />
                ))}
            </div>
       
       
       </>
    );
};

export default Home;
