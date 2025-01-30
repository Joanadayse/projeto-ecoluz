import styled from "styled-components";
export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

 export const TooltipText = styled.span`
  visibility: hidden;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  text-align: center;
  padding: 8px;
  border-radius: 5px;
  position: absolute;
  z-index: 10;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  font-size: 0.9rem;
`;