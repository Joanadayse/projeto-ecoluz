import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardButton, CardContainer, CardHeader  } from "./Card.styled";





const Cards = ({ title, icon, description, buttonText,route }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(route); // Redireciona para a rota passada via props
  };
    return (
        <CardContainer>
            <CardHeader>
                <img src={icon} alt={title} />
                <h2>{title}</h2>
            </CardHeader>
            <CardBody>
                <p>{description}</p>
            </CardBody>
        <CardButton onClick={handleClick}>{buttonText}</CardButton>
        </CardContainer>
    );
}; 

export default Cards;
