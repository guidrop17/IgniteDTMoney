import styled from "styled-components";

export const SummaryContainer = styled.section(() => ({
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0 1.5rem",

    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
    marginTop: "-5rem",
}))

interface ISummaryCardProps {
    variant?: "green"
}

export const SummaryCard = styled.div<ISummaryCardProps>(({ theme, variant }) => ({
    background: variant === "green" ? theme["green-700"] : theme["gray-600"],
    padding: "2rem",
    borderRadius: "6px",
    
    "header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: theme["gray-300"],
    },

    "strong": {
        display: "block",
        marginTop: "1rem",
        fontSize: "2rem",
    },    
}))