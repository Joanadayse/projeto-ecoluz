import { TooltipContainer, TooltipText } from "./Tooltip.styled";


const Tooltip = ({ text, children }) => {
    return (
        <TooltipContainer>
            {children}
            <TooltipText>{text}</TooltipText>
        </TooltipContainer>
    );
};

export default Tooltip;